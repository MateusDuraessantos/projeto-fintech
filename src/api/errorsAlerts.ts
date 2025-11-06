type alertas = 'warning' | 'danger' | 'success'

export const showAlert = (message: string, type: alertas) => {
  const alert = document.createElement('div')

  alert.innerHTML = `<div class="alert slowFade--open alert-${type}" id="alert" role="alert">${message}</div>`
  document.body.append(alert)

  setTimeout(() => { 
    document.getElementById('alert')?.classList.add('slowFade--close')
    setTimeout(() => alert.remove(), 1000);
  }, 5000);
}

