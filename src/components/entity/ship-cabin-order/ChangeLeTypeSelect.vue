<template>
  <el-select
    :loading="loading"
    :multiple="type === 'multiple'"
    :clearable="clearable"
    v-model="selectedValue"
    :disabled="disabled"
    size="mini"
    filterable
    class="max-w"
    @change="change"
  >
    <el-option v-for="item in list" :key="item.id" :label="item.title" :value="item.id"/>
  </el-select>
</template>

<script>

import ChangeTypeEnumUtil from './../../enum/ship-cabin-order/ChangeTypeEnumUtil'

export default {
  name: 'ChangeLeTypeSelect',
  props: {
    value: {
      type: Number | String | Array,
      default: null
    },
    type: {
      type: String,
      default: 'single'
    },
    clearable: {
      type: Boolean,
      default: true
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      list: [
        {
          id: 1,
          title: ChangeTypeEnumUtil.toTitle(1)
        },
        {
          id: 2,
          title: ChangeTypeEnumUtil.toTitle(2)
        },
        {
          id: 3,
          title: ChangeTypeEnumUtil.toTitle(3)
        },
        {
          id: 4,
          title: ChangeTypeEnumUtil.toTitle(4)
        },
      ],
      selectedValue: null,
      loading: false
    }
  },
  watch: {
    value(value) {
      if (value !== this.selectedValue) {
        this.selectedValue = value
      }
    }
  },
  created() {
    if (this.type === 'multiple') {
      this.selectedValue = this.value || []
    } else {
      this.selectedValue = this.value
    }
  },
  methods: {
    change(event) {
      this.$emit('input', event)
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
</style>
