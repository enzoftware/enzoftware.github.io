<template>
    <v-container>
        <h1>Mis proyectos favoritos</h1>  
        <v-flex xs12 v-for="project in projects" v-bind:key="project" class="project-card" justify-center>
            <v-card :color="project.color" class="white--text" justify-center>
                <v-layout>
                    <v-flex >
                        <v-card-title primary-title class="top_card_project">
                            <div>
                                <div class="headline"><strong>{{project.title}}</strong></div>
                                <div>{{project.description}}</div>
                            </div>
                        </v-card-title>
                    </v-flex>
                </v-layout>
                <v-divider light></v-divider>
                <v-card-actions class="pa-4 bottom_card_project" >
                    <strong class="item">{{project.language}}</strong>
                    <v-btn flat dark :href="project.repo" target="_blank">
                        <v-icon>fab fa-github</v-icon>
                        Github
                    </v-btn>
                    {{project.stars}}
                    <v-icon>star</v-icon>
                </v-card-actions>
            </v-card>
        </v-flex>
    </v-container>
</template>

<style>
    @import url('https://fonts.googleapis.com/css?family=Fira+Mono');

    h1{
            font-family: 'Fira Mono', monospace;
            color: #ffffff;
            font-size: 46px;
            font-weight: bold;
    }

    .top_card_project{
        justify-content: center;
    }


    .bottom_card_project{
        justify-content: center;
    }

    .item{
        font-size: 19px;
    }

    .titulo_proyectos{
        margin: 25px;
    }

    .project-card{
        margin: 3%;
    }
    </style>


<script>
    export default {
        data: () => ({
            projects: [{
                    title: 'Cryptocurrency Tracker',
                    stars: 2,
                    repo: 'https://github.com/enzoftware/crypto-tracker',
                    language: 'Kotlin',
                    tech: 'Android',
                    color: 'teal accent-4',
                    description: 'Cryptocurency tracker price and latest change for the price of crypto currencies like Bitcoin, Ethereum, Litecoin and more.'
                },
                {
                    title: 'Flask Quotes',
                    stars: 4,
                    repo: 'https://github.com/enzoftware/flask-quotes',
                    language: 'Python',
                    tech: 'Flask',
                    color: 'purple',
                    description: 'Motivational quotes website build with flask ❤️ 😄'
                },
                {
                    title: 'Flask Quotes',
                    stars: 4,
                    repo: 'https://github.com/enzoftware/flask-quotes',
                    language: 'Python',
                    tech: 'Flask',
                    color: 'purple',
                    description: 'Motivational quotes website build with flask ❤️ 😄'
                },
                {
                    title: 'Flask Quotes',
                    stars: 4,
                    repo: 'https://github.com/enzoftware/flask-quotes',
                    language: 'Python',
                    tech: 'Flask',
                    color: 'purple',
                    description: 'Motivational quotes website build with flask ❤️ 😄'
                },
                {
                    title: 'Flask Quotes',
                    stars: 4,
                    repo: 'https://github.com/enzoftware/flask-quotes',
                    language: 'Python',
                    tech: 'Flask',
                    color: 'purple',
                    description: 'Motivational quotes website build with flask ❤️ 😄'
                },
            ]
        })
    }
</script>