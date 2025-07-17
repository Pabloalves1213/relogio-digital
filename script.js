const hourselement = document.getElementById('hours')
const minuteselement = document.getElementById('minutes')
const secondsselement = document.getElementById('seconds')

function newTime(){ //função responsavel por fazer o relogio rodar//

    const date = new Date();

    const hours = date.getHours()
    const minutes = date.getMinutes()
    const seconds = date.getSeconds()

    hourselement.textContent = fixtime(hours)
    minuteselement.textContent = fixtime(minutes)
    secondsselement.textContent = fixtime(seconds)
}




function fixtime(time) {
    return time < 10 ? '0' + time : time //adicionar o 0 entre as horas e minutos//
}
newTime()//comando para evitar bug de zerar horas//
setInterval(newTime,1000)//responsavel por fazer a contagem dos segundos//