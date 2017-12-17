<template>
<div>
    <span id="msg">{{message}}</span>
</div>
</template>

<script>
export default {
    data() {
        return {
            message: "Hello"
        }
    }
}
</script>

<style>
#msg {
  color: red;
}
</style>