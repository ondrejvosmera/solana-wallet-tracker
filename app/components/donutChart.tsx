import React, { useEffect, useRef } from 'react';
import DonutChart from 'react-donut-chart';

interface CustomDonutChartProps {
  solBalanceInUsdc: number | null;
  calculateTotalTokenValue: () => number;
  calculateTotalNftPriceInUsd: () => number;
  isDarkMode: boolean;
}

const CustomDonutChart: React.FC<CustomDonutChartProps> = ({
  solBalanceInUsdc,
  calculateTotalTokenValue,
  calculateTotalNftPriceInUsd,
  isDarkMode
}) => {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const textElements = chartRef.current?.querySelectorAll('svg text');
    textElements?.forEach((text) => {
        const svgTextElement = text as SVGTextElement;
        svgTextElement.style.fill = isDarkMode ? '#FFFFFF' : '#000000';
    });
  }, [isDarkMode]);


  const formatValue = (value: number) => parseFloat(value.toFixed(2));

  return (
    <div ref={chartRef}>
      <DonutChart
        data={[
          {
            label: 'SOL',
            value: formatValue(solBalanceInUsdc ? solBalanceInUsdc : 0),
          },
          {
            label: 'Tokens',
            value: formatValue(calculateTotalTokenValue()),
          },
          {
            label: 'NFTs',
            value: formatValue(calculateTotalNftPriceInUsd()),
          },
        ]}
        width={450}
        height={300}
        colors={['#03E1FF','#00FFA3', '#DC1FFF']}
        strokeColor='#000'
        clickToggle={false}
        selectedOffset={0.01}
      />
    </div>
  );
};

export default CustomDonutChart;
