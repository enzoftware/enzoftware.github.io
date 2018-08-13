<template>
    <v-container>
        <div class="display-1 titulo_proyectos white--text">Mis proyectos favoritos</div>
        <v-flex xs7 v-for="project in projects" v-bind:key="project">
            <v-card :color="project.color" class="white--text">
                <v-layout row>
                    <v-flex>
                        <v-card-title primary-title>
                            <div>
                                <div class="headline"><strong>{{project.title}}</strong></div>
                                <div>{{project.description}}</div>
                            </div>
                        </v-card-title>
                    </v-flex>
                </v-layout>
                <v-divider light></v-divider>
                <v-card-actions class="pa-4">
                    <strong class="item">{{project.language}}</strong>
                    <strong class="item">-</strong>
                    <strong class="item">{{project.tech}}</strong>
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
.item{
    font-size: 19px;
}
.titulo_proyectos{
    margin: 25px;
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
            ]
        })
    }
</script>