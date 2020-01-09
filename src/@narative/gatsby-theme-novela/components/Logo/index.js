import React from "react"
/**
 * Paste in your SVG logo and return it from this component.
 * Make sure you have a height set for your logo.
 * It is recommended to keep the height within 25-35px.
 */
export default function Logo() {
  return (
    <svg
      width="125"
      height="35"
      viewBox="0 0 125 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="125" height="35" fill="#505050" />
      <path
        d="M24.924 23V14.624H30.624V16.244H26.748V17.96H30.072V19.568H26.748V21.38H30.624V23H24.924ZM32.1171 23V16.7H33.8931V18.068H33.9531C33.9851 17.892 34.0411 17.724 34.1211 17.564C34.2011 17.396 34.3051 17.248 34.4331 17.12C34.5691 16.992 34.7291 16.892 34.9131 16.82C35.0971 16.74 35.3131 16.7 35.5611 16.7H35.8731V18.356H35.4291C34.9091 18.356 34.5211 18.424 34.2651 18.56C34.0171 18.696 33.8931 18.948 33.8931 19.316V23H32.1171ZM37.8566 16.028C37.4966 16.028 37.2326 15.948 37.0646 15.788C36.9046 15.62 36.8246 15.408 36.8246 15.152V14.888C36.8246 14.632 36.9046 14.424 37.0646 14.264C37.2326 14.096 37.4966 14.012 37.8566 14.012C38.2166 14.012 38.4766 14.096 38.6366 14.264C38.8046 14.424 38.8886 14.632 38.8886 14.888V15.152C38.8886 15.408 38.8046 15.62 38.6366 15.788C38.4766 15.948 38.2166 16.028 37.8566 16.028ZM36.9686 16.7H38.7446V23H36.9686V16.7ZM42.9462 23.144C42.4742 23.144 42.0542 23.068 41.6862 22.916C41.3182 22.756 41.0102 22.536 40.7622 22.256C40.5142 21.968 40.3262 21.62 40.1982 21.212C40.0702 20.804 40.0062 20.348 40.0062 19.844C40.0062 19.34 40.0702 18.888 40.1982 18.488C40.3262 18.08 40.5142 17.732 40.7622 17.444C41.0102 17.156 41.3182 16.936 41.6862 16.784C42.0542 16.632 42.4742 16.556 42.9462 16.556C43.5862 16.556 44.1182 16.7 44.5422 16.988C44.9742 17.276 45.2822 17.68 45.4662 18.2L44.0262 18.824C43.9702 18.584 43.8542 18.38 43.6782 18.212C43.5022 18.044 43.2582 17.96 42.9462 17.96C42.5862 17.96 42.3142 18.08 42.1302 18.32C41.9462 18.552 41.8542 18.868 41.8542 19.268V20.444C41.8542 20.844 41.9462 21.16 42.1302 21.392C42.3142 21.624 42.5862 21.74 42.9462 21.74C43.2662 21.74 43.5182 21.656 43.7022 21.488C43.8942 21.312 44.0342 21.084 44.1222 20.804L45.5022 21.404C45.2942 22.004 44.9702 22.444 44.5302 22.724C44.0982 23.004 43.5702 23.144 42.9462 23.144ZM52.0894 19.04L51.2854 17.36H51.2494V23H49.5334V14.624H51.5254L53.8174 18.584L54.6214 20.264H54.6574V14.624H56.3734V23H54.3814L52.0894 19.04ZM59.153 23.132C58.793 23.132 58.525 23.044 58.349 22.868C58.181 22.684 58.097 22.452 58.097 22.172V21.932C58.097 21.652 58.181 21.424 58.349 21.248C58.525 21.064 58.793 20.972 59.153 20.972C59.513 20.972 59.777 21.064 59.945 21.248C60.121 21.424 60.209 21.652 60.209 21.932V22.172C60.209 22.452 60.121 22.684 59.945 22.868C59.777 23.044 59.513 23.132 59.153 23.132ZM70.0838 21.668H70.0238C69.9598 22.092 69.7438 22.444 69.3758 22.724C69.0078 23.004 68.5078 23.144 67.8758 23.144C67.3958 23.144 66.9478 23.052 66.5318 22.868C66.1158 22.684 65.7518 22.412 65.4398 22.052C65.1278 21.692 64.8838 21.244 64.7078 20.708C64.5318 20.172 64.4438 19.552 64.4438 18.848C64.4438 18.144 64.5358 17.52 64.7198 16.976C64.9038 16.432 65.1598 15.976 65.4878 15.608C65.8238 15.24 66.2238 14.96 66.6878 14.768C67.1518 14.576 67.6678 14.48 68.2358 14.48C68.9878 14.48 69.6358 14.644 70.1797 14.972C70.7238 15.292 71.1518 15.776 71.4638 16.424L69.9758 17.276C69.8478 16.948 69.6478 16.672 69.3758 16.448C69.1038 16.216 68.7238 16.1 68.2358 16.1C67.6678 16.1 67.2158 16.264 66.8798 16.592C66.5438 16.92 66.3758 17.436 66.3758 18.14V19.484C66.3758 20.18 66.5438 20.696 66.8798 21.032C67.2158 21.36 67.6678 21.524 68.2358 21.524C68.4598 21.524 68.6718 21.5 68.8718 21.452C69.0718 21.396 69.2478 21.316 69.3998 21.212C69.5518 21.1 69.6678 20.968 69.7478 20.816C69.8358 20.664 69.8798 20.484 69.8798 20.276V19.856H68.3198V18.332H71.6198V23H70.0838V21.668ZM77.9528 23C77.6328 23 77.3648 22.9 77.1488 22.7C76.9408 22.5 76.8088 22.232 76.7528 21.896H76.6808C76.5848 22.304 76.3728 22.616 76.0448 22.832C75.7168 23.04 75.3128 23.144 74.8328 23.144C74.2008 23.144 73.7168 22.976 73.3808 22.64C73.0448 22.304 72.8768 21.86 72.8768 21.308C72.8768 20.644 73.1168 20.152 73.5968 19.832C74.0848 19.504 74.7448 19.34 75.5768 19.34H76.5728V18.944C76.5728 18.64 76.4928 18.4 76.3328 18.224C76.1728 18.04 75.9048 17.948 75.5288 17.948C75.1768 17.948 74.8968 18.024 74.6888 18.176C74.4808 18.328 74.3088 18.5 74.1728 18.692L73.1168 17.756C73.3728 17.38 73.6928 17.088 74.0768 16.88C74.4688 16.664 74.9968 16.556 75.6608 16.556C76.5568 16.556 77.2288 16.752 77.6768 17.144C78.1248 17.536 78.3488 18.108 78.3488 18.86V21.62H78.9368V23H77.9528ZM75.4928 21.908C75.7888 21.908 76.0408 21.844 76.2488 21.716C76.4648 21.588 76.5728 21.38 76.5728 21.092V20.348H75.7088C75.0128 20.348 74.6648 20.584 74.6648 21.056V21.236C74.6648 21.468 74.7368 21.64 74.8808 21.752C75.0248 21.856 75.2288 21.908 75.4928 21.908ZM80.1288 23V16.7H81.9048V18.068H81.9648C81.9968 17.892 82.0528 17.724 82.1328 17.564C82.2128 17.396 82.3168 17.248 82.4448 17.12C82.5808 16.992 82.7408 16.892 82.9248 16.82C83.1088 16.74 83.3248 16.7 83.5728 16.7H83.8848V18.356H83.4408C82.9208 18.356 82.5328 18.424 82.2768 18.56C82.0288 18.696 81.9048 18.948 81.9048 19.316V23H80.1288ZM87.4658 23.144C86.9938 23.144 86.5738 23.068 86.2058 22.916C85.8378 22.756 85.5298 22.536 85.2818 22.256C85.0338 21.968 84.8458 21.62 84.7178 21.212C84.5898 20.804 84.5258 20.348 84.5258 19.844C84.5258 19.34 84.5898 18.888 84.7178 18.488C84.8458 18.08 85.0338 17.732 85.2818 17.444C85.5298 17.156 85.8378 16.936 86.2058 16.784C86.5738 16.632 86.9938 16.556 87.4658 16.556C88.1058 16.556 88.6378 16.7 89.0618 16.988C89.4938 17.276 89.8018 17.68 89.9858 18.2L88.5458 18.824C88.4898 18.584 88.3738 18.38 88.1978 18.212C88.0218 18.044 87.7778 17.96 87.4658 17.96C87.1058 17.96 86.8338 18.08 86.6498 18.32C86.4658 18.552 86.3738 18.868 86.3738 19.268V20.444C86.3738 20.844 86.4658 21.16 86.6498 21.392C86.8338 21.624 87.1058 21.74 87.4658 21.74C87.7858 21.74 88.0378 21.656 88.2218 21.488C88.4138 21.312 88.5538 21.084 88.6418 20.804L90.0218 21.404C89.8138 22.004 89.4898 22.444 89.0498 22.724C88.6178 23.004 88.0898 23.144 87.4658 23.144ZM92.009 16.028C91.649 16.028 91.385 15.948 91.217 15.788C91.057 15.62 90.977 15.408 90.977 15.152V14.888C90.977 14.632 91.057 14.424 91.217 14.264C91.385 14.096 91.649 14.012 92.009 14.012C92.369 14.012 92.629 14.096 92.789 14.264C92.957 14.424 93.041 14.632 93.041 14.888V15.152C93.041 15.408 92.957 15.62 92.789 15.788C92.629 15.948 92.369 16.028 92.009 16.028ZM91.121 16.7H92.897V23H91.121V16.7ZM99.2106 23C98.8906 23 98.6226 22.9 98.4066 22.7C98.1986 22.5 98.0666 22.232 98.0106 21.896H97.9386C97.8426 22.304 97.6306 22.616 97.3026 22.832C96.9746 23.04 96.5706 23.144 96.0906 23.144C95.4586 23.144 94.9746 22.976 94.6386 22.64C94.3026 22.304 94.1346 21.86 94.1346 21.308C94.1346 20.644 94.3746 20.152 94.8546 19.832C95.3426 19.504 96.0026 19.34 96.8346 19.34H97.8306V18.944C97.8306 18.64 97.7506 18.4 97.5906 18.224C97.4306 18.04 97.1626 17.948 96.7866 17.948C96.4346 17.948 96.1546 18.024 95.9466 18.176C95.7386 18.328 95.5666 18.5 95.4306 18.692L94.3746 17.756C94.6306 17.38 94.9506 17.088 95.3346 16.88C95.7266 16.664 96.2546 16.556 96.9186 16.556C97.8146 16.556 98.4866 16.752 98.9346 17.144C99.3826 17.536 99.6066 18.108 99.6066 18.86V21.62H100.195V23H99.2106ZM96.7506 21.908C97.0466 21.908 97.2986 21.844 97.5066 21.716C97.7226 21.588 97.8306 21.38 97.8306 21.092V20.348H96.9666C96.2706 20.348 95.9226 20.584 95.9226 21.056V21.236C95.9226 21.468 95.9946 21.64 96.1386 21.752C96.2826 21.856 96.4866 21.908 96.7506 21.908Z"
        fill="#9C8BFF"
      />
    </svg>
  )
}
