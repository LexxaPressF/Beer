<template>
    <div id="state_bg">
        {{name}}: {{info}}
    </div>
</template>

<script>
    export default {
        name: "State",
        props:{
            name: String,
            info: String
        }
    }
</script>

<style scoped>

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

#state_bg{
    font-family: Roboto;
    text-shadow: black;
    text-align: center;
    border-radius: 8px;
    width: 400px;
    height: 80px;
    background: linear-gradient(180deg, rgba(141,93,52,1) 0%, rgb(161, 108, 63) 100%);
    box-shadow: 10px 10px 15px rgba(0, 0, 0, 0.5);
    border: 3px solid rgb(33, 33, 33);
    font-size: 1.8em;
    font-weight: 400;
    line-height: 35px;
    color: #472c19;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
}

/* Firefox */
* {
    scrollbar-width: auto;
    scrollbar-color: #472c19 #9b673c;
}
/* Chrome, Edge, and Safari */
*::-webkit-scrollbar {
    width: 8px;
}

*::-webkit-scrollbar-track {
    background: linear-gradient(180deg, rgba(141,93,52,1) 0%, rgb(161, 108, 63) 100%);
    border-radius: 30px;
}

*::-webkit-scrollbar-thumb {
    background-color: #472c19;
    border-radius: 30px;
    border: 0px solid #212121;
}
</style>