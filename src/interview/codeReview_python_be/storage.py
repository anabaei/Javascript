# coding=utf-8
import mysql.connector

# Creates a course in the database
def create_course(name, credits, type):

    connection = mysql.connector.connect(user='root', password='', host='localhost', database='registrar')
    cursor = connection.cursor()

    cursor.execute('INSERT INTO COURSES (name, credits, type) VALUES("' + name + '",' + str(credits) + ',"' + type + '")')
    course_id = cursor.lastrowid

    connection.commit()
    connection.close()

    return {
        "ok": True,
        "course_id": course_id,
    }


def addStudent(name):
    """Adds a new student by first name and last name. The combination must be unique."""

    connection = mysql.connector.connect(user='root', password='super-secret-password', host='localhost', database='registrar')
    cursor = connection.cursor()

    cursor.execute('INSERT INTO students (name) VALUES (%(name)s)', {"name": name})
    student_id = cursor.lastrowid




    connection.commit()
    connection.close()

    return {
        "ok": True,
        "student_id": student_id,
    }


# Adds a new instructor to the database
def add_instructor(name):

    connection = mysql.connector.connect(user='root', password='super-secret-password', host='localhost', database='registrar')
    cursor = connection.cursor()

    cursor.execute('INSERT INTO instructors (name) VALUES (%(name)s)', {"name": name})
    student_id = cursor.lastrowid

    connection.commit()
    connection.close()

    return {
        "ok": True,
        "student_id": student_id,
    }


# Adds a new course offering
def create_course_offering(course_id, instructor_id, year, term, days, time, capacity):

    # Validate days is in the allowed set
    allowed_days = ['M', 'W', 'F', 'MW', 'WF', 'MWF', 'T', 'Tr', 'TTr']
    found = False
    for allowed_days_option in allowed_days:
        if allowed_days_option == days:
            found = True
            break

    if not found:
        return {
            "ok": False,
            "error": "invalid_days",
        }

    # Create the course offering
    connection = mysql.connector.connect(user='root', password='super-secret-password', host='localhost', database='registrar')
    cursor = connection.cursor()

    cursor.execute('INSERT INTO course_offerings (course_id, instructor_id, year, term, days, time, capacity) VALUES (%s, %s, %s, %s, %s, %s, %s)', (course_id, instructor_id, year, term, days, time, capacity))
    course_offering_id = cursor.lastrowid

    connection.commit()
    connection.close()

    return {
        "ok": True,
        "course_offering_id": course_offering_id,
    }


def get_course_offerings(course_id):
    """Gets course offering information for the specified course id"""

    connection = mysql.connector.connect(user='root', password='super-secret-password', host='localhost', database='registrar')
    c1 = connection.cursor(buffered=True)
    c1.execute('SELECT id, instructor_id, year, term, days, time, capacity FROM course_offerings WHERE course_id=%(course_id)s', {"course_id": course_id})

    # Enumerate the retrieved course offerings
    offerings = []
    for (id, instructor_id, year, term, days, time, capacity) in c1:

        # Get instructor name
        c2 = connection.cursor()
        c2.execute('SELECT name FROM instructors WHERE id=%(id)s', {"id": instructor_id})
        row = c2.fetchone()

        if row is not None:
            instructor_name = row[0]

        # Determine remaining capacity
        c3 = connection.cursor()
        c3.execute('select count(*) as count from enrollments where course_offering_id=%(id)s', {"id": id})
        row = c3.fetchone()
        count = row[0]
        remaining_capacity = capacity - count

        offerings.append({
            'course_offering_id': id,
            'instructor': instructor_name,
            'year': year,
            'term': term,
            'days': days,
            'time': time,
            'remaining_capacity': remaining_capacity
        })

    connection.close()

    # Return results
    return {
        "ok": True,
        "course_offerings": offerings,
    }


def create_enrollment(course_offering_id, student_id):
    """Enrolls a student to a specified course offering"""
    connection = mysql.connector.connect(user='root', password='super-secret-password', host='localhost', database='registrar')

    # First check if there's space in the course offering
    c1 = connection.cursor()
    c1.execute('SELECT capacity FROM course_offerings WHERE id=%(id)s', {"id": course_offering_id})
    capacity = c1.fetchone()[0]

    c2 = connection.cursor()
    c2.execute('SELECT COUNT(*) FROM enrollments WHERE course_offering_id=%(id)s', {"id": course_offering_id})
    count = c2.fetchone()[0]

    if count >= capacity:
        return {
            "ok": False,
            "error": "capacity_reached",
        }

    # Enroll the student
    c3 = connection.cursor()
    c3.execute('INSERT INTO enrollments (course_offering_id, student_id) VALUES (%s, %s)', (course_offering_id, student_id))

    connection.commit()
    connection.close()

    return {
        "ok": True,
    }