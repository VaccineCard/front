const api = 'https://vaccine-card.herokuapp.com/api' // 'http://127.0.0.1:8000/api'

// const api = 'http://127.0.0.1:8000/api'

const generateApi = (url) => `${api}/${url}`

export default generateApi
