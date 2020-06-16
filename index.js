window.addEventListener('load', () => {
    console.log('antes del before');
    const vm = new Vue ({
        el: '#app',
        data: {
            mensaje : 'hola init'
        },
        
        created: function(){
            console.log(this.mensaje)
            // https://api.coindesk.com/v1/bpi/currentprice.json
        }
    })
}) 