import { useInstances } from '.';
import { Text, Bounds, useBounds } from '@react-three/drei';
import { useMemo } from 'react';

const rows = 15;
const offSet = 5.5;

const SelectToZoom = ({ children }) => {
  const api = useBounds();
  const ZoomTo = (e) => {
    e.stopPropagation();
    console.log(e.object.name);
    e.delta <= 2 && api.refresh(e.object).fit();
  };
  const Deselect = (e) => {
    e.button === 0 && api.refresh().fit();
  };
  return (
    <group onClick={ZoomTo} onPointerMissed={Deselect}>
      {children}
    </group>
  );
};

export const ShowAll = (props: JSX.IntrinsicElements['group']) => {
  const ALL = useInstances();
  const Keys = Object.keys(ALL);

  const AllInstances = useMemo(
    () =>
      Keys.map((key, i) => {
        const X = (i % rows) * offSet;
        const Y = Math.floor(i / rows) * offSet;
        const Model = ALL[key];
        return (
          <Model name={key} key={key} position={[X, Y, 0]}>
            <Text
              color="white"
              anchorX="center"
              anchorY="middle"
              scale={0.35}
              position-y={-1}
            >
              {key}
            </Text>
          </Model>
        );
      }),
    [ALL]
  );

  return (
    <group {...props}>
      <Bounds fit clip observe margin={3}>
        <SelectToZoom>{AllInstances}</SelectToZoom>
      </Bounds>
    </group>
  );
};
