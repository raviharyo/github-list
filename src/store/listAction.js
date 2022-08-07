import axios from "axios"
export const getLists = () => {
    return (dispatch) => {
        return new Promise(async (resolve, reject) => {
            try {
                const response = await axios.get(`https://api.github.com/users/raviharyo/repos`)
                // console.log(response.data);
                dispatch(fetchLists(response.data))
                resolve()
            }
            catch (err) {
                reject(err)
            }
        })
    }
}

export const fetchLists = (payload) => ({
    type: `lists/fetchSuccess`,
    payload
})