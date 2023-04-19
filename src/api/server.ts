const token = '5ef6e2c524a5374271ae48958b232b7a766bb970048e822f';

export const server_calls = {
    get: async () => {
      const response = await fetch(`https://trapezoidal-just-mandevilla.glitch.me/api/entertainment-units`, {
        method: 'GET',
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
            'x-access-token': `Bearer ${token}`
          
        }
    });
    if(!response.ok) {
        throw new Error('Aw shucks, something went wrong');
    }
    return await response.json()
    },

    create: async(data: any = {}) => {
        const response = await fetch(`https://trapezoidal-just-mandevilla.glitch.me/api/entertainment-units`,{
            method : 'POST',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
        },
        body: JSON.stringify(data)
    });
    if(!response.ok) {
        throw new Error(`GAME OVER MAN! GAME OVER! .....try again`)
    }
    return await response.json()
},

    update: async (id: string, data: any = {}) => {
        const response = await fetch(`https://trapezoidal-just-mandevilla.glitch.me/api/entertainment-units/${id}`,{
            method : 'PUT',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });
        if(!response.ok) {
        throw new Error(`There must have been a glitch in the matrix`)
        }
    },
    delete: async(id: string) => {
        const response = await fetch(`https://trapezoidal-just-mandevilla.glitch.me/api/entertainment-units/${id}`,{
            method : 'DELETE',

            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            }
        });
        if(!response.ok) {
            throw new Error(`Something went wrong with this unit`)
        }
        return;
    },

    getOne: async(id: string) => {
        const response = await fetch(`https://search.imdbot.workers.dev/?q=Niram`,{
            method : 'GET',
            headers: {
            
            }
        });
        if(!response.ok) {
            throw new Error(`Something went wrong with this unit`)
        }
        return await response.json()
    }
    
    

    
} 