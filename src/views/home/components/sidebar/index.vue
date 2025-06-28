<template>
    <div class="side-menu">
        <el-collapse>
            <el-collapse-item v-for="group in menuList" :key="group.groupName" :title="group.groupName"
                :name="group.groupName">
                <div class="menu-item" v-for="knowelege in group.list" :key="knowelege.name"
                    @click="getCurView(group.path, knowelege.path, knowelege.name)">
                    <div class="knowelege-title" :class="{ active: expandKnowelege == knowelege.name }">{{
                        knowelege.name }}</div>
                    <template v-if="expandKnowelege == knowelege.name">
                        <div class="knowelege-tips">
                            <div :class="{ active: markCurAnchor == item.name }" v-for="item in knowelege.items"
                                :key="item.name" @click="getCurKnowelegeAnchor(group.path, knowelege.path, item.name)">
                                {{ item.name }}
                            </div>
                        </div>
                    </template>
                </div>
            </el-collapse-item>
        </el-collapse>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter()
const menuList = ref([{
    groupName: "知识库",
    path: "knowledge",
    list: [
        {
            name: "说说你对vue的理解",
            path: "vue",
            items: [
                {
                    name: "一、vue是什么",
                },
                {
                    name: "二、vue的核心特性",
                },
                {
                    name: "三、vue与传统开发的区别",
                }
            ]
        },
        {
            name: "Vue实例挂载的过程",
            path: "vuemount",
            items: [
                {
                    name: "一、源码分析",
                },
                {
                    name: "二、结论",
                },
            ]
        },
        {
            name: "Vue中给对象添加新属性界面不刷新?",
            path: "reactiveobj",
            items: [
                {
                    name: "一、直接添加属性的问题",
                },
                {
                    name: "二、原理分析",
                },
                {
                    name: "三、解决方案",
                },
            ]
        },
        {
            name: "Vue组件之间的通信方式都有哪些?",
            path: "communication",
            items: [
                {
                    name: "一、组件间通信的分类",
                },
                {
                    name: "二、组件间通信的方案",
                },
            ]
        },
        {
            name: "双向数据绑定是什么?",
            path: "bind",
            items: [
                {
                    name: "一、什么是双向绑定",
                },
                {
                    name: "二、双向绑定的原理是什么",
                },
            ]
        },
        {
            name: "Vue中的$nextTick有什么作用",
            path: "nexttick",
            items: [
                {
                    name: "一、NextTick是什么",
                },
                {
                    name: "二、使用场景",
                },
                {
                    name: "三、实现原理"
                }
            ]
        },
        {
            name: "Vue.observable是什么",
            path: "observable",
            items: [
                {
                    name: "一、Observable是什么",
                },
                {
                    name: "二、使用场景",
                },
                {
                    name: "三、实现原理"
                }
            ]
        },
        {
            name: "权限管理怎么处理",
            path: "permission",
            items: [
                {
                    name: "一、如何实现",
                }
            ]
        },
        {
            name: "Vue3.0里为什么要用 Proxy API 替代 defineProperty API",
            path: "proxy",
            items: [
                {
                    name: "一、Object.defineProperty",
                },
                {
                    name: "二、proxy",
                },
                {
                    name: "三、总结",
                }
            ]
        }
    ]
},
{
    groupName: "面试题",
    path: "interview",
    list: [
        {
            name: "说说你对vue的理解",
            path: "vue",
            items: [
                {
                    name: "一、vue是什么",
                },
                {
                    name: "二、vue的核心特性",
                },
                {
                    name: "三、vue与传统开发的区别",
                }
            ]
        },
    ]
}, {
    groupName: "组件库",
    path: "componentsrepo",
    list: [
        {
            name: "说说你对vue的理解",
            path: "vue",
            items: [
                {
                    name: "一、vue是什么",
                },
                {
                    name: "二、vue的核心特性",
                },
                {
                    name: "三、vue与传统开发的区别",
                }
            ]
        },
    ]
}])
const expandKnowelege = ref("")
const markCurAnchor = ref("")

const getCurView = (firstpath: string, secondpath: string, name: string) => {
    expandKnowelege.value = name
    router.push({ path: `/${firstpath}/${secondpath}` })
}
const scrollToAnchor = (name: string) => {
    const hash = name
    markCurAnchor.value = name;

    // 修改地址栏 hash，但不跳转路由
    window.history.replaceState(null, '', `#${hash}`);

    // 手动滚动到元素
    const el = document.getElementById(hash);
    if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
    }
};
const getCurKnowelegeAnchor = (firstpath: string, secondpath: string, name: string) => {
    scrollToAnchor(name)
}
</script>

<style scoped lang="scss">
.active {
    color: #3eaf7c !important;
}

.menu-item {
    padding: 0 10px;
    box-sizing: border-box;
    background-color: #f6f6f7;

    .knowelege-title {
        font-weight: 600;
        cursor: pointer;
        padding: 5px 16px 5px 0;
        box-sizing: border-box;
    }

    .knowelege-tips {
        padding-left: 10px;
        cursor: pointer;

        a {
            text-decoration: none;
            display: block;
            color: black;
        }
    }
}

.side-menu {
    border-right: 1px solid #eaecef;
    overflow: auto;
    // padding: 20px;
    box-sizing: border-box;
    width: 250px;
    height: 100%;
    background-color: #f6f6f7;
}
</style>