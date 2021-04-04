# coding=utf-8

import storage

def HandleRouting(path, query_parameters, body):

    # Divert based on path
    if path == '/api/course.create':
        return storage.create_course(body['name'], body['credits'], body['type'])
    if path == '/api/course.addOffering':
        return storage.create_course_offering(body['course_id'], body['instructor_id'], body['year'], body['term'], body['days'], body['time'], body['capacity'])
    if path == '/api/course.getOfferings':
        return storage.get_course_offerings(body['course_id'])
    if path == '/api/course.enroll':
        return storage.create_enrollment(body['course_offering_id'], body['student_id'])
    if path == '/api/student.add':
        return storage.addStudent(body['name'])
    if path == '/api/instructor.add':
        return storage.add_instructor(body['name'])

    # can't find an associated endpoint
    return {
        "ok": False,
        "error": "unknown_method"
    }