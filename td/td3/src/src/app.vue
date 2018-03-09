<template>
<div>
    <span id="msg">{{message}}</span>

    <p>Movie number : {{movies.length}}</p>
    <p>
        New movie<br />
        Title : <input type="text" v-model="movie_to_add.title" /><br />
        Year : <input type="text" v-model="movie_to_add.year" /><br />
        Synopsys : <textarea v-model="movie_to_add.synopsys"></textarea><br />
        <button v-on:click="newmovie2">Add</button>
    </p>
    Search : <input type="text" v-model="search" />

    <ul>
        <movie-item v-for="(movie, index) in movies_search" v-bind:key="movie.title" v-bind:movie="movie" v-on:edit="edit" v-on:remove="remove(index)"></movie-item>
    </ul>

    <p v-if="movie_to_edit">
        New movie<br />
        Title : <input type="text" v-model="movie_to_edit.title" /><br />
        Year : <input type="text" v-model="movie_to_edit.year" /><br />
        Synopsys : <textarea v-model="movie_to_edit.synopsys"></textarea><br />
        <button v-on:click="save">Save</button>
    </p>
</div>
</template>

<script>
export default {
    data() {
        return {
            message: "Hello",
            movie_to_add: {},
            movie_to_edit: null,
            search: "",
            movies : [
                {
                    title: "L'étrange noël de M. Jack",
                    year: 1994,
                    synopsys: "Jack Skellington, un épouvantail squelettique surnommé « le Roi des citrouilles » (Pumpkin King en version originale), vit dans la ville d'Halloween. En tant que maître de l'épouvante, Jack occupe ses journées à préparer la prochaine fête d'Halloween."
                }, 
                {
                    title: "Interstellar",
                    year: 2014,
                    synopsys: "Alors que la Terre se meurt, une équipe d'astronautes franchit un trou de ver apparu près de Saturne conduisant à une autre galaxie, cela dans le but d'explorer un nouveau système stellaire et l'espoir de trouver une nouvelle planète habitable par l'humanité afin de la sauver."
                }
            ]
        }
    },

    methods: {
        newmovie1: function() {
            this.movies.push({title:"New movie"})
        },
        newmovie2: function() {
            this.movies.push(this.movie_to_add)
            this.movie_to_add = {}
        },

        edit: function(movie) {
            this.movie_to_edit = movie
        },
        save: function() {
            this.movie_to_edit = null
        },
        remove: function(index) {
            this.movies.splice(index, 1)
        }
    },

    created: function() {
        console.log("Created")
    },

    computed: {
        firstletter: function() {
            return this.message[0]
        },
        movies_search: function() {
            return this.movies.filter(m => m.title.toLowerCase().indexOf(this.search.toLowerCase())!=-1);
        }
    }
}
</script>

<style>
#msg {
  color: red;
}
</style>