<template>
    <div id="acc_bg">
        <div id="avatar" v-bind:style="{
            background: `url(${avatar}`,
            backgroundColor: 'rgba(94, 64, 34, 0.5)',
            backgroundPosition: 'center',
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat'}">
        </div>
        <div id="wrapper">
            <State v-for="item in Object.keys(accInfo)" :key= "item"
                  :name = "item.charAt(0).toUpperCase() + item.slice(1)"
                  :info="accInfo[item]"/>
        </div>
    </div>
</template>

<script>
    import State from "./State";
    export default {
        name: "Account",
        components: {State},
        data(){
            return{
                accInfo:{
                    name: '',
                    gender: '',
                    age: '',
                    position: ''
                },
                avatar: ''
            }
        },
        beforeCreate() {
            this.axios.get('https://random-data-api.com/api/users/random_user')
                .then((response) => {
                    console.log(response.data)
                    this.accInfo.name = response.data.first_name + " " + response.data.last_name
                    const birth_date = new Date(response.data.date_of_birth.split("-"))
                    const diff = Date.now() - birth_date.getTime()
                    this.accInfo.age = `${Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25))}`
                    this.accInfo.position = response.data.employment.title
                    this.accInfo.gender = response.data.gender
                    this.avatar = response.data.avatar
            })
        }
    }
</script>

<style scoped>

#acc_bg{
    margin: 20px;
    /*border: #578076 15px ridge;*/
    flex-grow: 2;
    display: flex;
    flex-direction: column;
}

#avatar{
    flex-grow: 4;
    border-radius: 16px;
    backdrop-filter: blur(3px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
}

#wrapper{
    flex-grow: 3;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
}
    
</style>