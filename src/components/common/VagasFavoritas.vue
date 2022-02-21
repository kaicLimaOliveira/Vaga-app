<template>
    <div>
        <div class="favoriteVacancy">
            <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                Vagas Favoritas <span class="badge bg-dark">{{favoriteVacancy.length}}</span>
            </button>

        </div>

        <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
            <div class="offcanvas-header">
                <h5 id="offcanvasRightLabel">Vagas Favoritadas</h5>
                <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            
            <div class="offcanvas-body">
                <ul class="list-group">
                    <li class="list-group-item" v-for="(vancacy, index) in favoriteVacancy" :key="index">
                        {{ index += 1}} - {{ vancacy['title'] }} <br>

                        <img src="@/assets/angles-right-solid.svg" width="10">
                        {{ vancacy['description'] }}
                    </li>
                </ul>

            </div>
        </div>
    </div>
</template>

<script>


export default{
    name: 'VagasFavoritas',
    data: () => ({
        favoriteVacancy: []
    }),

    mounted() {
        this.emitter.on('favoriteVacancy', e => {
            this.favoriteVacancy.push(e)
            console.log(this.favoriteVacancy);
        })

        this.emitter.on('desfavoriteVacancy', e => {
            let indexArray = this.favoriteVacancy.indexOf(e)
            if(indexArray !== 1) this.favoriteVacancy.splice(indexArray, 1)
            console.log(this.favoriteVacancy.indexOf(e));


        })
    }
}
</script>

<style scoped lang="scss">

.favoriteVacancy {
    display: flex;
    z-index: 1;
    justify-content:flex-end;
    padding: 20px 80px 0 0;
}

</style>