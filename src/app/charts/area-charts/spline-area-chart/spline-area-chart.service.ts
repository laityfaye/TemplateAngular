import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
    providedIn: 'root'
})
export class SplineAreaChartService {

    private isBrowser: boolean;

    constructor(@Inject(PLATFORM_ID) private platformId: any) {
        this.isBrowser = isPlatformBrowser(this.platformId);
    }

    async loadChart(): Promise<void> {
        if (this.isBrowser) {
            try {
                // Dynamically import ApexCharts
                const ApexCharts = (await import('apexcharts')).default;

                // Define chart options
                const options = {
                    series: [
                        {
                            name: "Trezo",
                            data: [31, 40, 28, 51, 42, 109, 100]
                        },
                        {
                            name: "Social",
                            data: [11, 32, 45, 32, 34, 52, 41]
                        }
                    ],
                    chart: {
                        height: 350,
                        type: "area",
                        toolbar: {
                            show: true
                        }
                    },
                    dataLabels: {
                        enabled: false
                    },
                    stroke: {
                        curve: "smooth"
                    },
                    colors: [
                        "#605DFF", "#0f79f3"
                    ],
                    xaxis: {
                        type: "datetime",
                        categories: [
                            "2018-09-19T00:00:00.000Z",
                            "2018-09-19T01:30:00.000Z",
                            "2018-09-19T02:30:00.000Z",
                            "2018-09-19T03:30:00.000Z",
                            "2018-09-19T04:30:00.000Z",
                            "2018-09-19T05:30:00.000Z",
                            "2018-09-19T06:30:00.000Z"
                        ],
                        axisTicks: {
                            show: false,
                            color: '#ECEEF2'
                        },
                        axisBorder: {
                            show: false,
                            color: '#ECEEF2'
                        },
                        labels: {
                            show: true,
                            style: {
                                colors: "#8695AA",
                                fontSize: "12px"
                            }
                        }
                    },
                    tooltip: {
                        x: {
                            format: "dd/MM/yy HH:mm"
                        }
                    },
                    yaxis: {
                        tickAmount: 5,
                        max: 110,
                        min: 0,
                        labels: {
                            show: true,
                            style: {
                                colors: "#64748B",
                                fontSize: "12px"
                            }
                        },
                        axisBorder: {
                            show: false,
                            color: '#ECEEF2'
                        },
                        axisTicks: {
                            show: false,
                            color: '#ECEEF2'
                        }
                    },
                    legend: {
                        show: true,
                        position: 'top',
                        fontSize: '12px',
                        horizontalAlign: 'left',
                        itemMargin: {
                            horizontal: 8,
                            vertical: 0
                        },
                        labels: {
                            colors: '#64748B'
                        },
                        markers: {
                            size: 7,
                            offsetX: -2,
                            offsetY: -.5,
                            shape: 'diamond'
                        }
                    },
                    grid: {
                        show: true,
                        borderColor: "#ECEEF2"
                    }
                };

                // Initialize and render the chart
                const chart = new ApexCharts(document.querySelector('#spline_area_chart'), options);
                chart.render();
            } catch (error) {
                console.error('Error loading ApexCharts:', error);
            }
        }
    }

}