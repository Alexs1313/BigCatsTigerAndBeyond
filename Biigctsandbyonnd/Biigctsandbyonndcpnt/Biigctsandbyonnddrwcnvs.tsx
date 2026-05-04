import React, {useCallback, useMemo, useRef, useState} from 'react';
import {
  LayoutChangeEvent,
  PanResponder,
  StyleSheet,
  View,
  type StyleProp,
  type ViewStyle,
} from 'react-native';

import type {
  BiigctsandbyonnddrwPoint,
  BiigctsandbyonnddrwStroke,
} from '../Biigctsandbyonnddata/Biigctsandbyonnddrwstor';

export const biigctsandbyonnddrwCnvsBg = '#F5ECD8';

const biigctsandbyonnddrwClamp = (n: number, a: number, b: number) =>
  Math.max(a, Math.min(b, n));

const biigctsandbyonnddrwPushLine = (
  pts: BiigctsandbyonnddrwPoint[],
  x0: number,
  y0: number,
  x1: number,
  y1: number,
  strokeWidth: number,
  maxPts: number,
) => {
  const biigctsandbyonnddrwDx = x1 - x0;
  const biigctsandbyonnddrwDy = y1 - y0;
  const biigctsandbyonnddrwDist = Math.hypot(
    biigctsandbyonnddrwDx,
    biigctsandbyonnddrwDy,
  );
  if (biigctsandbyonnddrwDist < 0.35) {
    return;
  }
  const biigctsandbyonnddrwStep = Math.max(1.1, strokeWidth * 0.26);
  const biigctsandbyonnddrwUx = biigctsandbyonnddrwDx / biigctsandbyonnddrwDist;
  const biigctsandbyonnddrwUy = biigctsandbyonnddrwDy / biigctsandbyonnddrwDist;
  let biigctsandbyonnddrwT = biigctsandbyonnddrwStep;
  while (
    biigctsandbyonnddrwT < biigctsandbyonnddrwDist &&
    pts.length < maxPts
  ) {
    pts.push({
      x: x0 + biigctsandbyonnddrwUx * biigctsandbyonnddrwT,
      y: y0 + biigctsandbyonnddrwUy * biigctsandbyonnddrwT,
    });
    biigctsandbyonnddrwT += biigctsandbyonnddrwStep;
  }
  if (pts.length < maxPts) {
    pts.push({x: x1, y: y1});
  }
};

export const biigctsandbyonnddrwScaleStrokes = (
  biigctsandbyonnddrwStrokes: BiigctsandbyonnddrwStroke[],
  biigctsandbyonnddrwSx: number,
  biigctsandbyonnddrwSy: number,
): BiigctsandbyonnddrwStroke[] =>
  biigctsandbyonnddrwStrokes.map(s => ({
    ...s,
    width: Math.max(
      1,
      s.width * ((biigctsandbyonnddrwSx + biigctsandbyonnddrwSy) / 2),
    ),
    points: s.points.map(p => ({
      x: p.x * biigctsandbyonnddrwSx,
      y: p.y * biigctsandbyonnddrwSy,
    })),
  }));

type BiigctsandbyonnddrwCnvsProps = {
  readOnly?: boolean;
  strokes: BiigctsandbyonnddrwStroke[];
  strokeColor: string;
  strokeWidth: number;
  isErase: boolean;
  onCommitStroke?: (s: BiigctsandbyonnddrwStroke) => void;
  rootStyle?: StyleProp<ViewStyle>;
};

const BiigctsandbyonnddrwCnvs = ({
  readOnly = false,
  strokes,
  strokeColor,
  strokeWidth,
  isErase,
  onCommitStroke,
  rootStyle,
}: BiigctsandbyonnddrwCnvsProps) => {
  const biigctsandbyonnddrwLayoutRef = useRef({w: 0, h: 0});
  const biigctsandbyonnddrwDraftRef = useRef<BiigctsandbyonnddrwStroke | null>(
    null,
  );
  const [biigctsandbyonnddrwV, setBiigctsandbyonnddrwV] = useState(0);

  const biigctsandbyonnddrwBump = useCallback(() => {
    setBiigctsandbyonnddrwV(v => v + 1);
  }, []);

  const biigctsandbyonnddrwOnLayout = useCallback((e: LayoutChangeEvent) => {
    const {width, height} = e.nativeEvent.layout;
    biigctsandbyonnddrwLayoutRef.current = {w: width, h: height};
  }, []);

  const biigctsandbyonnddrwPan = useMemo(() => {
    if (readOnly) {
      return PanResponder.create({});
    }
    return PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: evt => {
        const {w, h} = biigctsandbyonnddrwLayoutRef.current;
        if (w <= 0 || h <= 0) {
          return;
        }
        const {locationX, locationY} = evt.nativeEvent;
        const x = biigctsandbyonnddrwClamp(locationX, 0, w);
        const y = biigctsandbyonnddrwClamp(locationY, 0, h);
        biigctsandbyonnddrwDraftRef.current = {
          color: isErase ? biigctsandbyonnddrwCnvsBg : strokeColor,
          width: strokeWidth,
          points: [{x, y}],
        };
        biigctsandbyonnddrwBump();
      },
      onPanResponderMove: evt => {
        const d = biigctsandbyonnddrwDraftRef.current;
        if (!d) {
          return;
        }
        const {w, h} = biigctsandbyonnddrwLayoutRef.current;
        const {locationX, locationY} = evt.nativeEvent;
        const x = biigctsandbyonnddrwClamp(locationX, 0, w);
        const y = biigctsandbyonnddrwClamp(locationY, 0, h);
        const pts = d.points;
        const last = pts[pts.length - 1]!;
        if (Math.hypot(x - last.x, y - last.y) < 0.35) {
          return;
        }
        if (pts.length >= 4500) {
          return;
        }
        biigctsandbyonnddrwPushLine(pts, last.x, last.y, x, y, d.width, 4500);
        biigctsandbyonnddrwBump();
      },
      onPanResponderRelease: () => {
        const d = biigctsandbyonnddrwDraftRef.current;
        biigctsandbyonnddrwDraftRef.current = null;
        biigctsandbyonnddrwBump();
        if (!d || !onCommitStroke) {
          return;
        }
        if (d.points.length >= 2) {
          onCommitStroke(d);
        } else if (d.points.length === 1) {
          const p0 = d.points[0]!;
          onCommitStroke({
            ...d,
            points: [p0, {x: p0.x + 0.5, y: p0.y + 0.5}],
          });
        }
      },
    });
  }, [
    readOnly,
    strokeColor,
    strokeWidth,
    isErase,
    onCommitStroke,
    biigctsandbyonnddrwBump,
  ]);

  const biigctsandbyonnddrwAll: BiigctsandbyonnddrwStroke[] = (() => {
    const d = biigctsandbyonnddrwDraftRef.current;
    if (d) {
      return [...strokes, d];
    }
    return strokes;
  })();

  void biigctsandbyonnddrwV;

  return (
    <View
      onLayout={biigctsandbyonnddrwOnLayout}
      style={[styles.biigctsandbyonnddrwCnvsRoot, rootStyle]}
      {...(readOnly ? {} : biigctsandbyonnddrwPan.panHandlers)}>
      {biigctsandbyonnddrwAll.map((s, si) =>
        s.points.map((p: BiigctsandbyonnddrwPoint, pi: number) => {
          const r = Math.max(1.5, s.width / 2);
          return (
            <View
              key={`${si}-${pi}`}
              pointerEvents="none"
              style={[
                styles.biigctsandbyonnddrwCnvsDot,
                {
                  left: p.x - r,
                  top: p.y - r,
                  width: 2 * r,
                  height: 2 * r,
                  borderRadius: r,
                  backgroundColor: s.color,
                },
              ]}
            />
          );
        }),
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  biigctsandbyonnddrwCnvsRoot: {
    backgroundColor: biigctsandbyonnddrwCnvsBg,
    borderRadius: 18,
    overflow: 'hidden',
    flex: 1,
  },
  biigctsandbyonnddrwCnvsDot: {
    position: 'absolute',
  },
});

export default BiigctsandbyonnddrwCnvs;
