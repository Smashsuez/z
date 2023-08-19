"use client"
import React from 'react'
import styles from "../../app/style/Terms.module.css"

const Terms = ({setPrivecy}) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
      <h1 className={styles.title}>Terms of Service</h1><br/>
      <p className={styles.close} onClick={() => setPrivecy(false)}>X</p>
      This Terms and Conditions are agreed between the <br/>(1) the natural or juristic person requesting the services of the Carrier the ("Consignor"); and <br/>(2) Zagel Egypt Logistics and Technology Services (the "Carrier")

The services provided by the Carrier to the Consignor by virtue of any Contract shall be subject to these terms and conditions, no agent or employee of the Carrier is authorized to amend or agree different terms and conditions with Consignor:<br/>

1- Definitions:

Contract": Any agreement made between the Consignor and the Carrier to provide shipping services, whether by virtue of signing a receipt for one shipment or a contract for providing frequent services.

Consignment " means any goods, materials and/or documents sent in one parcel or package, or number of parcels or packages sent together via one Contract in one load to the same destination.
Consignee": The natural or juristic person who the

Consignor is requesting the Carrier to deliver the

Consignment to.<br/>

2- Consignor shall provide all details, measurements, weight and packaging details of the Consignment and the Consignee. The Carrier may request any additional information in relation to the Consignment and the location of delivery.<br/>

3-Consignor acknowledges that the Consignment does not include any illegal or dangerous materials. Consignor acknowledges the ownership of the Consignment and the sole responsibility for any legal liability in relation to the Consignment. The Carrier may open and inspect the Consignment for safety or regulatory reasons.<br/>

4- Consignor acknowledges that the Consignment does not contain cheques.

5-The provided service prices for frequent Consignor are subject to amendment from time to time upon the sole discretion of the Carrier and are enforceable by virtue of a 30 days' notice to be sent to the Consignor.<br/>

6- The Consignor is responsible to provide the Carrier with shipment tracking waybill document necessary to execute the shipment. In case of failure of delivery due to inaccuracy or unsatisfactory documents, the Carrier shall not be responsible for the failure of delivery<br/>

7- The Consignor is responsible for the packaging of the Consignment and will be held liable for any damage caused to the Consignment or any third party due to poor packing.<br/>

8- Carrier shall deliver the Consignment to the agreed address of the Consignee but not necessary the Consignee personally, unless agreed otherwise in writing. Consignee personally, unless agreed otherwise in writing.<br/>

9- Carrier will be entitled to receive in advance or be reimbursed for any amounts, charges and/or customs duties imposed on the Consignment.<br/>

10- The Consignor shall be entitled to change the delivery instructions any time before the delivery of the Consignment to the Consignee as long as the new instructions are amended in the shipment document and approved by the Carrier will be charged of new zone (if applicable) charge for amending the shipment details that include change the delivery zone or city 1- Carrier's liability for any loss or damage of the shipment is limited to EGP 500 Carrier shall not be liable for indirect, incidental, or consequential damages.<br/>

12- Consignor is responsible for arranging insurance covering the value of the Consignment and may request the Carrier to arrange for insurance for the declared Consignment value.<br/>

13-If any provision of the Terms and Conditions is held by a court of competent jurisdiction to be illegal, invalid or unenforceable in any respect, then such provision shall (so far as it is invalid or unenforceable) be given no effect and shall be deemed not to be included in the Terms and Conditions but without invalidating any of the remaining provisions of the Terms and Conditions.<br/>

14- In case of credit payment carrier will issue monthly invoice for the services; consignor should settle within 15 days from the date of receiving<br/>

15- Contract is valid for one year and automatically renewed automatically unless any of the parties express a termination notice 30 days prior to

termination date<br/>

6-Terms and Conditions are subject to the Egyptian Laws.<br/>
      </div>
    </div>
  )
}

export default Terms