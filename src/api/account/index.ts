import client from '@/api/common/client'


const accountApi = {
  getDemoTestListID(id: string) {
    return client.get(`/api/${id}/list`)
  },
  login(data: any) {
    return client.post(`/login`, data)
  },
  getUserInfoApi() {
    return client.get(`/api/admin/user/info`)
  },
  logout() {
    return client.delete('/api/auth/logout')
  },
  getMenuList() {
    return client.get('/api/admin/menu/systemMenu?systemMenu=0,1')
  }
}

export default accountApi
