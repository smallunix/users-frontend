
export async function getAllUsers() {

    const response = await fetch('http://ec2-3-38-168-53.ap-northeast-2.compute.amazonaws.com:8090/api/users',
    {
        mode: 'no-cors'
    });
    console.log(response.json());
    return response.json();
}

export async function createUser(data) {
    const response = await fetch(`http://ec2-3-38-168-53.ap-northeast-2.compute.amazonaws.com:8090/api/user`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data),
        mode:'no-cors'
      })
    return response.json();
}

