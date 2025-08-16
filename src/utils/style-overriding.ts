import type {
  OverridePropKeys,
  OverridePropsButValueOptional,
} from "@/types/theme-types";

export function hasOverrideProp<T>(props: OverridePropsButValueOptional<T>) {
  const propsArray: Array<OverridePropKeys<T>> = Object.keys(props) as Array<
    OverridePropKeys<T>
  >;
  // console.log(propsArray);
  const isOverridden = propsArray.some((key) => {
    return props[key];
  });
  if (isOverridden) {
    return true;
  }
  return false;
}
