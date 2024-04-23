<script lang="ts">
  /**
   * A Text component  component
   * @name 'TextL'
   * @version 1.0.0
   */

  import { defineComponent, h } from 'vue';
  import Styles from '@/styles/compositions/TextL.module.styl';

  export default defineComponent({
    props: {
      tag: {
        type: String,
        default: 'span',
      },
      color: {
        type: String,
        default: 'grey-9',
      },
    },
    setup(props, { slots }) {
      return () =>
        h(
          props.tag,
          {
            class: Object.values(Styles),
            style: { color: props.color },
          },
          slots,
        );
    },
  });
</script>
