import BackTop from "components/content/backTop/BackTop.vue";
import { debounce } from './utils'
export const itemListenerMinxin = {
    data() {
        return {
            itemImgListener: null
        }
    },
    mounted() {
        let newRefresh = debounce(this.$refs.scroll.refres, 100)
        this.itemImgListener = () => {
            newRefresh()
        }
        this.$bus.$on('itemImgLoad', this.itemImgListener)
    }
}

export const backTopMixin = {
    components: {
        BackTop
    },
    data() {
        return {
            isShowBackTop: false,
        }
    },
    methods: {
        backClick() {
            //
            this.$refs.scroll.scroll.scrollTo(0, 0, 500);
          },
    }
}