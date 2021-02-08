const Users = {

    Test() {
    
        return fetch('https://kayamspa.herokuapp.com/results/index', {
        method: 'GET',
        headers:{'Content-Type': 'application/json'}, body: ''}).then(res=> res.json())
      },

    create(attr) {
    
        return fetch('https://kayamspa.herokuapp.com/users', {
        method: 'POST',
        headers:{'Content-Type': 'application/json'},
        body: JSON.stringify(attr)}).then(res=> res.json())
      },
    find(attr) {
      return fetch('https://kayamspa.herokuapp.com/tokens', {
      method: 'POST',
      headers:{'Content-Type': 'application/json'}
      ,body: JSON.stringify(attr)}).then(res=> {
    
        if (res.status === 200)
          {
           return res.json()
          }
          else
          {
            // it actually returns undefined
            return "not found!"
          }
      })
    }
    
    }
    
    export { Users };