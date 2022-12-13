<template>
    <div class="h-screen w-screen flex flex-row gap-4 items-center justify-between p-4">
        <!-- DOT NOTATION JSON -->
        <div class="w-full shadow-xl h-full rounded-2xl bg-white p-4 flex flex-col">
            <div class="mb-4">
                <span class="font-bold">Dot Notation JSON</span>
            </div>
            <div v-for="(val, key) in data">
                <span class="font-bold">{{key}}: </span>
                <span class="font-medium">{{val}}</span>
            </div>
        </div>

        <!-- TREE VIEW JSON -->
        <div class="w-full shadow-xl h-full rounded-2xl bg-white p-4 flex flex-col">
            <div class="mb-4">
                <span class="font-bold">Tree View JSON</span>
            </div>
            <div>
                <!-- <Treeselect v-model="value" :options="wtf" /> -->
            </div>
            <div>
                <TreeNode v-for="w in wtf" :key="w.name" :node="w" />
            </div>
        </div>
    </div>
</template>


<script>
import TreeNode from '../components/TreeNode.vue'
import Treeselect from 'vue3-treeselect'
import 'vue3-treeselect/dist/vue3-treeselect.css'
import data from '../assets/json/json.json'
export default{
    components: { TreeNode, Treeselect },
    data(){
        return {
            obj: {},
            data: data,
            value: '',
        }
    },

    methods: {
        displayJSON(){
            for (const item in data){
                this.set(this.obj, item, data[item])
            }
        },

        set(obj, path, val) { 
            const keys = path.split('.');
            const lastKey = keys.pop();
            const lastObj = keys.reduce((obj, key) => 
                obj[key] = obj[key] || {}, 
                obj); 
            lastObj[lastKey] = val;
        },

        toArrayTree(obj) {
            return Object.keys(obj).map(key => {
                return typeof obj[key] === 'object' ?
                    {id: key, label: key, children: this.toArrayTree(obj[key])} :
                    {id: key, label: key, value: obj[key]};
            })
        }
    },

    computed: {
        wtf(){
            return this.toArrayTree(this.obj)
        }
    },

    mounted(){
        this.displayJSON()
        console.log(this.wtf)
    }
}

</script>