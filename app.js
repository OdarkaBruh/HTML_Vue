const app = Vue.createApp({
    
    data() {
        return {
            myInput: "",
            jobs: 
            [
            {"name":"Продавець-стиліст", "salary":"30 000", "companyName": "Helen Marlen", "adress":"Київ, вулиця Басейна, 4а", "description": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor."},
            {"name":"Водій на авто компанії", "salary":"45 000", "companyName": "Нова пошта, ТОВ", "adress":"Київ", "description": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo"},
            {"name":"Продавець у кав'ярню", "salary":"16 200", "companyName": "Слюсаренко С.А., ФЛП", "adress":"Київ", "description": "Li Europan lingues es membres del sam familie. Lor separat existentie es un myth.\nPor scientie, musica, sport etc, litot Europa usa li sam vocabular"},
            {"name":"Бармен", "salary":"22 000", "companyName": "Мама Манана", "adress":"Київ", "description": "Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus."},
            {"name":"Вантажник-комплектувальник", "salary":"12 000", "companyName": "Українські свіжо-заморожені продукти, ТОВ", "adress":"Київ, вулиця Сім'ї Сосніних, 9", "description": "Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.\nDonec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu."}
          ]        
        }
    },
    
    methods:{
        filteredList(){
            if (this.myInput === ""){
                return this.jobs;
            }
            else {
                return this.jobs.filter((job) => job.name.toLowerCase().includes(this.myInput))
            }
        }
    }
})
app.mount('#app')