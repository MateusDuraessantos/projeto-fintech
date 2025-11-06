import type { Users } from '~/types/users'
import { showAlert } from '~/api/errorsAlerts'

const baseUrl = 'http://localhost:8080/api/user'

export const callable_users = {
  GET_all: async (): Promise<Users> => {
    const messageError = `Erro ao buscar lista de usuários`

    try {
      const res = await fetch(baseUrl)
      const data: Users = await res.json()
      
      if (!res.ok) throw new Error(messageError)

      return data

    } catch (error) { throw new Error(messageError) }
  },

  GET_byCpf: async (user: Users): Promise<Users> => {
    const messageError = `erro ao buscar usuário "${user.nome} ${user.sobrenome}"`
    try {
      const res = await fetch(`${baseUrl}/${user.cpf}`)

      if (!res.ok) throw new Error(messageError);
      const data: Users = await res.json()
      
      return data

    } catch (error) {
      throw new Error(messageError)
    }
  },

  POST_user: async (user: Users): Promise<Users> => {
    const messageError = `Erro ao criar usuário "${user.nome} ${user.sobrenome}".`

    try {
      const res = await fetch(baseUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user),
      });

      if (!res.ok) throw new Error(messageError)
      const data: Users = await res.json()
      showAlert(`Usuário "${user.nome} ${user.sobrenome}" criado com sucesso!`, 'success')

      return data

    } catch (error) {
      showAlert(messageError, 'danger')
      throw new Error(messageError)
    }
  },

  PUT_user: async (user: Users) => {
    const messageError = `Erro ao atualizar usuário "${user.nome} ${user.sobrenome}"`

    try {
      const res = await fetch(`${baseUrl}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json', },
        body: JSON.stringify(user)
      })

      if (!res.ok) throw new Error(messageError)

      showAlert(`Usuário "${user.nome} ${user.sobrenome}" atualizado com sucesso!`, 'success')

      return true

    } catch (error) {
      showAlert(messageError, 'danger')
      throw new Error(messageError)
    }
  },

  DELETE_user: async (user: Users) => {
    const messageError = `Erro ao excluir usuário`

    try {
      if (!confirm(`Tem certeza de que deseja excluir o usuário \n "${user.nome} ${user.sobrenome}"?`)) return

      const res = await fetch(`${baseUrl}/${user.cpf}`, { method: 'DELETE' })

      if (!res.ok) throw new Error(messageError)
      const data: Users = await res.json()
      
      showAlert(`Usuário ${data.nome} ${data.sobrenome} excluído com sucesso!`, 'success')

      return true

    } catch (error) {
      showAlert(messageError, 'danger')
      throw new Error(messageError)
    }
  },

}