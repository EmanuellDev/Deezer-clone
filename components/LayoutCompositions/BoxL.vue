<script lang="ts">
/**
 * A simple box component
 * @name 'BoxL'
 * @version 1.0.0
 */

import { defineComponent, h } from "vue";
import Styles from "@/styles/compositions/BoxL.module.styl";
import { colors } from "@/styles/colors/colors";

export default defineComponent({
  props: {
    tag: {
      type: String,
      default: "div",
    },
    backgroundColor: {
      type: String,
      default: colors.whiteDefault,
    },
  },
  setup(props, { slots }) {
    return () =>
      h(
        props.tag,
        {
          class: Object.values(Styles),
          style: { backgroundColor: props.backgroundColor },
        },
        slots
      );
  },
});
</script>
