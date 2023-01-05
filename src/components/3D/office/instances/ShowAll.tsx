import { useInstances } from '.';
import {
  Bounds,
  useBounds,
  BBAnchor,
  Html,
  OrbitControls,
  ContactShadows,
  useGLTF,
} from '@react-three/drei';

function SelectToZoom({ children }) {
  const api = useBounds();
  const toME = (e) => {
    e.stopPropagation();
    console.log(e.object);
    e.delta <= 2 && api.refresh(e.object).fit();
  };
  const clickedOff = (e) => {
    e.button === 0 && api.refresh().fit();
  };
  return (
    <group onClick={toME} onPointerMissed={clickedOff}>
      {children}
    </group>
  );
}

export const ShowAll = (props: JSX.IntrinsicElements['group']) => {
  const ALL = useInstances();
  const Keys = Object.keys(ALL);

  return (
    <group {...props}>
      <Bounds fit clip observe margin={2}>
        <SelectToZoom>
          {Keys.map((key, i) => {
            const rows = 15;
            const columns = 15;
            const offSet = 10;
            const X = (i % rows) * offSet;
            const Y = Math.floor(i / columns) * offSet;
            const Model = ALL[key];
            return <Model name={key} position={[X, Y, 0]} />;
          })}
        </SelectToZoom>
      </Bounds>
    </group>
  );
};
