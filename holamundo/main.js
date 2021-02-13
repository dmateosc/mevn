const app = Vue.createApp({
    data() {
        return {
            cuenta: 'Vista',
            cantidad: 1000,
            enlace: 'https://www.youtube.com',
            estado: true,
            servicios : ['transferencias', 'pagos', 'giros'],
            desactivar: false
        }
    },
    methods: {
        agregarSaldo(){
            
            this.cantidad = this.cantidad +100 
            if(this.cantidad > 0){
                this.desactivar = false
                return 
            }
        },
        disminuirSaldo(){
          
            this.cantidad = this.cantidad - 100
            if(this.cantidad <= 0){
                this.desactivar = true
                return 
            }
        }
    },
    computed: {
        colorCantidad() {
            return this.cantidad > 500 ? 'text-success': 'text-danger'
        },
        mayusculasTexto(){
            return this.cuenta.toUpperCase()
        }
    }
})
