import React, { useEffect, useRef } from 'react';
import DonutChart from 'react-donut-chart';

// Updated interface with types for the functions
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
  const chartRef = useRef<HTMLDivElement>(null); // Specifying the type for useRef

  useEffect(() => {
    const textElements = chartRef.current?.querySelectorAll('svg text');
    textElements?.forEach((text) => {
        const svgTextElement = text as SVGTextElement;
        svgTextElement.style.fill = isDarkMode ? '#FFFFFF' : '#000000'; // Change text color based on theme
    });
}, [isDarkMode]);

  return (
    <div ref={chartRef}>
      <DonutChart
        data={[
          {
            label: 'SOL',
            value: solBalanceInUsdc ? solBalanceInUsdc : 0,
          },
          {
            label: 'Tokens',
            value: calculateTotalTokenValue(),
          },
          {
            label: 'NFTs',
            value: calculateTotalNftPriceInUsd(),
          },
        ]}
        width={550}
        height={400}
      />
    </div>
  );
};

export default CustomDonutChart;
