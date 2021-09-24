<template>
  <div class="nav">
    <div v-for="item in items" :key="item.title" class="nav__item">
      <button
        type="button"
        class="button button_nav js-sorting-button"
        :class="{'is-active': isSelected(item.toggle)}"
        :data-toggle="item.toggle"
        @click="toggle"
      >
        {{ item.title }}
      </button>
    </div>
  </div><!-- /nav -->
</template>

<script>
export default {
  name: 'SortingButtons',
  props: {
    items: Array
  },
  data () {
    return {
      selected: []
    }
  },
  computed: {
    selectedItems () {
      return this.selected.length ? this.selected : this.items.map(el => el.toggle).filter(el => el !== 'all')
    }
  },
  methods: {
    toggle ({ target }) {
      const toggler = target.dataset.toggle
      if (this.isAlreadySelected(toggler)) {
        return
      }
      if (toggler === 'all') {
        this.selected = []
      } else if (this.isSelected(toggler)) {
        this.selected = this.selected.filter(el => el !== target.dataset.toggle)
      } else {
        this.selected = [...this.selected, target.dataset.toggle]
      }
      this.$emit('change', this.selectedItems)
    },
    isSelected (el) {
      return this.selected.includes(el) || this.isAlreadySelected(el)
    },
    isAlreadySelected (el) {
      return el === 'all' && !this.selected.length
    }
  }
}
</script>

<style scoped>

</style>
