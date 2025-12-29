import React from 'react';
import { PanelProps } from '@grafana/data';
import { SimpleOptions } from 'types';
import { css, cx } from '@emotion/css';
import { useStyles2 } from '@grafana/ui';

interface Props extends PanelProps<SimpleOptions> {}

const getStyles = () => {
  return {
    wrapper: css`
      font-family: Open Sans;
      position: relative;
    `,
    svg: css`
      position: absolute;
      top: 0;
      left: 0;
    `,
    textBox: css`
      position: absolute;
      bottom: 0;
      left: 0;
      padding: 10px;
    `,
    creditText: css`
      font-size: 18px;
      font-weight: bold;
      color: #FF5733; 
      margin-top: 10px;
      background-color: rgba(0,0,0,0.1);
      padding: 5px;
      border-radius: 5px;
    `
  };
};

export const SimplePanel: React.FC<Props> = ({ options, data, width, height }) => {
  const styles = useStyles2(getStyles);
  
  // Eğer ayarlardan renk gelmezse varsayılan 'red' olsun
  const circleColor = options.circleColor || 'red';
  // Eğer ayarlardan boyut gelmezse varsayılan 80 olsun
  const circleRadius = options.circleSize || 80;

  const onCircleClick = () => {
    alert('Developed by Asude, Irmak ve Mete!');
  };

  return (
    <div
      className={cx(
        styles.wrapper,
        css`
          width: ${width}px;
          height: ${height}px;
        `
      )}
    >
      <svg
        className={styles.svg}
        width={width}
        height={height}
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox={`-${width / 2} -${height / 2} ${width} ${height}`}
      >
        <g onClick={onCircleClick} style={{ cursor: 'pointer' }}>
          {/* Dairenin rengi ve boyutu burada belirleniyor */}
          <circle style={{ fill: circleColor }} r={circleRadius} />
        </g>
      </svg>

      <div className={styles.textBox}>
        <div className={styles.creditText}>
          Developed by Asude Sağlam, Irmak Parlak ve Mete Tuzcu
        </div>
      </div>
    </div>
  );
};