type func = () => void;

interface IAnimateBase {
  type?: string;
  duration?: number;
  easing?: string | func;
  success?: func;
}

type IAnimate = boolean | IAnimateBase;

export default IAnimate;
