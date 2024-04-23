<script lang="ts">
  /**
   * A component that can create a
   * horizontally centered column
   * @name 'ClusterL'
   * @version 1.0.0
   */
  import { defineComponent, h } from 'vue';
  import Styles from '@/styles/compositions/ClusterL.module.styl';

  export default defineComponent({
    props: {
      tag: {
        type: String,
        default: 'div',
      },
      column: {
        type: Boolean,
        default: null,
      },
    },
    setup(props, { slots }) {
      return () =>
        h(
          props.tag,
          {
            class: Object.values(Styles),
            column: props.column ? true : null,
          },
          slots,
        );
    },
  });
</script>
