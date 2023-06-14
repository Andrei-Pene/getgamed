export const dataFetch = async ({url, method, body = {}, json = true}) => {
    const response = await fetch(url, {
        method,
        ...(body && {body: JSON.stringify(body)}),
        headers : {
            Accept : "application/json",
            'Content-Type' : 'application/json',

        },
    });

    if(!response.ok) {
        throw new Error("API Error");
    }

    if (json) {
        const data = await response.json();
        return data.data
    }



};

export const registerUser = (user) => {
    return dataFetch({url : '/api/signup', method : 'post', body : user})
}

export const signin = (user) => {
    return dataFetch({url : '/api/signin ', method : 'post', body : user})
}

export const signout = () => {
    return dataFetch({url : '/api/signout', method : 'post'})
}

export const createCampaign = (campaign) => {
    return dataFetch({url : '/api/newcampaign ', method : 'post', body : campaign})
}

export const donateToCampaign = (amount) => {
    return dataFetch({url : '/api/donate ', method : 'post', body : amount})
}

export const deleteCampaign = (campaign) => {
    return dataFetch({url : '/api/deletecampaign', method : 'post', body : campaign})
}

export const updateCampaign = (campaign) => {
    return dataFetch({url : '/api/updatecampaign', method : 'put', body : campaign})
}

