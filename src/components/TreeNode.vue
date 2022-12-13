<template>
    <div :style="nodeMargin" v-if="node.label" class="flex items-center my-2 hover:bg-gray-100 transition cursor-pointer active:bg-gray-200">
        <span class="font-semibold">{{node.label}}</span>
        <span v-if="node.value" class="mx-2">:</span>
        <span>{{node.value}}</span>
    </div>
    <div v-if="hasChildren">
        <TreeNode
            v-for="child in node.children"
            :key="child.label"
            :node="child"
            :spacing="spacing + 25"
        />
    </div>
</template>


<script>

export default{
    name: 'TreeNode',
    props: {
        node: {
            type: Object,
            required: true,
        },
        spacing: {
            type: Number,
            default: 0
        }
    },

    computed: {
        hasChildren() {
            const { children } = this.node
            return children && children.length > 0
        },

        hasValue(){
            const value = this.node.value
            return value
        },

        nodeMargin() {
            return {
                'margin-left': `${this.spacing}px`
            }
        },
    }
}

</script>