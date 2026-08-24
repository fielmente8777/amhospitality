export interface PolicyPageItem {
  slug: string;
  metaData: {
    title: string;
    description: string;
  };
  title: string;
  content: string;
}

export const policiesPageData: PolicyPageItem[] = [
  {
    slug: "cancellation-policy",
    metaData: {
      title: "Cancellation & Refund Policy | AM Hotels & Resorts",
      description:
        "Cancellation and Refund Policy of Ante Meridiem Hospitality Pvt. Ltd. (AM Hotels & Resorts) for direct, website, OTA, and third-party reservations.",
    },
    title: "Ante Meridiem Hospitality Pvt. Ltd.",
    content: `
      <div>
        <div style="background-color: #F6F5F5; border: 1px solid #e5e7eb; border-radius: 1rem; padding: 1.75rem; margin-bottom: 2.5rem;">
          <div style="display: flex; align-items: center; justify-content: space-between; border-bottom: 1px solid #e5e7eb; padding-bottom: 0.75rem; margin-bottom: 1rem; flex-wrap: wrap; gap: 0.5rem;">
            
            <span style="font-size: 0.875rem; color: #64748b;">
              Website &bull; Direct Booking &bull; OTA &bull; Third-Party Reservations
            </span>
          </div>
          
          <div style="background-color: #80572E; padding: 1rem 1.25rem; border-radius: 0.5rem; margin-top: 1rem; color: #ffffff;">
            <p style="font-size: 0.95rem; color: #ffffff; line-height: 1.6; margin-bottom: 0;">
              <strong style="color: #ffffff;">IMPORTANT:</strong> Cancellation eligibility is determined by the rate plan, booking source, stay dates and the written booking confirmation. Payment of an advance constitutes acceptance of the applicable cancellation terms. Where a specific confirmation, package, contract or OTA voucher contains stricter terms, those terms will prevail to the extent permitted by applicable law.
            </p>
          </div>
        </div>

        <h3>1. Scope and Contractual Priority</h3>
        <p>This policy applies to accommodation reservations for hotels and resorts operated or managed by Ante Meridiem Hospitality Pvt. Ltd. through the official website, booking engine, reservation office, telephone, email, CRM, WhatsApp Business, authorised sales channels, OTAs, travel agents, corporate partners and other approved third parties.</p>
        <p>The rate plan and written confirmation issued for a reservation form part of the booking contract. In case of inconsistency, the more specific booking confirmation, signed agreement, promotional condition or channel-specific rule will prevail over this general policy, subject to applicable law.</p>

        <h3>2. Standard Direct Booking Cancellation Charges</h3>
        <p>Unless a different rate-plan condition is stated in writing, the following standard charges apply to direct bookings:</p>
        <table style="width: 100%; border-collapse: collapse; background-color: #ffffff; border: 1px solid #e5e7eb; margin: 1.5rem 0;" border="1" cellpadding="10" cellspacing="0">
          <thead style="background-color: #F6F5F5;">
            <tr>
              <th style="padding: 0.75rem 1rem; text-align: left; color: #1e293b; font-weight: 700; border: 1px solid #e5e7eb; background-color: #F6F5F5;">Cancellation Time</th>
              <th style="padding: 0.75rem 1rem; text-align: left; color: #1e293b; font-weight: 700; border: 1px solid #e5e7eb; background-color: #F6F5F5;">Charge Retained by AM Hotels & Resorts</th>
              <th style="padding: 0.75rem 1rem; text-align: left; color: #1e293b; font-weight: 700; border: 1px solid #e5e7eb; background-color: #F6F5F5;">Refund / Action</th>
            </tr>
          </thead>
          <tbody style="background-color: #ffffff;">
            <tr>
              <td style="padding: 0.75rem 1rem; border: 1px solid #e5e7eb;">15 days or more before check-in</td>
              <td style="padding: 0.75rem 1rem; border: 1px solid #e5e7eb;">25% of total booking value</td>
              <td style="padding: 0.75rem 1rem; border: 1px solid #e5e7eb;">Balance eligible amount may be refunded.</td>
            </tr>
            <tr>
              <td style="padding: 0.75rem 1rem; border: 1px solid #e5e7eb;">8 to 14 days before check-in</td>
              <td style="padding: 0.75rem 1rem; border: 1px solid #e5e7eb;">50% of total booking value</td>
              <td style="padding: 0.75rem 1rem; border: 1px solid #e5e7eb;">Balance eligible amount may be refunded.</td>
            </tr>
            <tr>
              <td style="padding: 0.75rem 1rem; border: 1px solid #e5e7eb;">7 days or less before check-in</td>
              <td style="padding: 0.75rem 1rem; border: 1px solid #e5e7eb;">100% of total booking value</td>
              <td style="padding: 0.75rem 1rem; border: 1px solid #e5e7eb;">No refund.</td>
            </tr>
            <tr>
              <td style="padding: 0.75rem 1rem; border: 1px solid #e5e7eb;">No-show / failure to arrive</td>
              <td style="padding: 0.75rem 1rem; border: 1px solid #e5e7eb;">100% of total booking value</td>
              <td style="padding: 0.75rem 1rem; border: 1px solid #e5e7eb;">No refund; room may be released without further notice.</td>
            </tr>
          </tbody>
        </table>
        <ul>
          <li>Cancellation deadlines are calculated according to the local time of the booked property. Taxes, payment gateway charges, bank charges or third-party fees that are non-recoverable by the Company may be excluded from any refund where legally permissible.</li>
        </ul>

        <h3>3. Peak Dates, Festivals, Long Weekends & High-Demand Periods</h3>
        <ul>
          <li>Bookings covering Diwali, Christmas, New Year, public holidays, long weekends, major events, wedding dates, school holidays or dates designated by the hotel as high-demand may require 100% advance payment.</li>
          <li>Such reservations may be strictly non-refundable, non-cancellable and non-transferable from the date of payment or confirmation.</li>
          <li>The hotel may apply minimum-stay requirements, inventory restrictions and special package conditions during these periods.</li>
          <li>Any date change is entirely subject to written management approval, availability and payment of the prevailing tariff difference. Approval is not guaranteed.</li>
        </ul>

        <h3>4. Non-Refundable, Promotional & Special Rate Plans</h3>
        <ul>
          <li>Advance-purchase, non-refundable, flash-sale, promotional, coupon, package, member, last-minute and special-event rates are non-refundable unless the written rate plan expressly states otherwise.</li>
          <li>Failure to use any included service, meal, activity, room night or package component does not create a refund entitlement.</li>
          <li>Any exception granted by the Company is a goodwill decision and does not create a precedent or future entitlement.</li>
          <li>Where an exception is approved, AM Hotels & Resorts may choose to issue a credit voucher or permit a date change instead of a cash refund, to the extent permitted by law.</li>
        </ul>

        <h3>5. Date Changes, Amendments & Guest Errors</h3>
        <ul>
          <li>A date-change request does not constitute a cancellation and is effective only after written confirmation by AM Hotels & Resorts.</li>
          <li>The Company may permit one date change for an eligible direct booking if requested sufficiently in advance. Any approval remains subject to availability, blackout dates and rate-plan conditions.</li>
          <li>If the new tariff is higher, the guest must pay the difference before the amended booking is confirmed. If the new tariff is lower, the original booking value may continue to apply and no automatic refund or credit of the difference is due.</li>
          <li>Incorrect dates, duplicate bookings, wrong room category, incorrect guest count or other booking errors made by the guest do not automatically qualify for a refund. The Company will review such cases at its discretion and under the applicable rate plan.</li>
          <li>A change in guest name, lead guest or occupancy may require fresh approval and revised charges.</li>
        </ul>

        <h3>6. OTA Cancellation Policy</h3>
        <p>For reservations made through MakeMyTrip, Goibibo, Booking.com, Agoda, Expedia, Cleartrip or any other Online Travel Agency (OTA):</p>
        <ul>
          <li>All cancellation, amendment, refund and dispute requests must normally be raised through the same OTA from which the reservation was made.</li>
          <li>The cancellation and payment conditions displayed by the OTA at the time of booking and on the confirmation voucher govern the reservation.</li>
          <li>AM Hotels & Resorts will not be obligated to provide a more favourable cancellation condition than the condition sold through the OTA.</li>
          <li>Where payment was collected by the OTA, any refund must ordinarily be processed by the OTA. The hotel cannot guarantee the OTA processing timeline, deduction structure or return of OTA convenience/service fees.</li>
          <li>Where the OTA seeks hotel approval for an exception, AM Hotels & Resorts may approve, partially approve or decline the request based on the booked rate plan, loss of inventory, stay dates and commercial circumstances, subject to law.</li>
          <li>A guest must not treat verbal communication with the hotel as an approved OTA cancellation. Written confirmation from the OTA or hotel, as applicable, is required.</li>
        </ul>

        <h3>7. Third-Party, Travel Agent & Corporate Reservations</h3>
        <ul>
          <li>Bookings made through a travel agent, corporate travel desk, tour operator, wedding planner, event organiser or other intermediary must normally be cancelled or amended through that source.</li>
          <li>Commercial terms agreed between AM Hotels & Resorts and the booking partner may differ from this public policy and will govern that transaction.</li>
          <li>Where the third party is the payer, any eligible refund may be returned to the original payer rather than the staying guest.</li>
          <li>AM Hotels & Resorts is not responsible for commissions, mark-ups, convenience fees, service fees, finance charges or other amounts independently charged by a third party.</li>
        </ul>

        <h3>8. Groups, Weddings, MICE, Conferences & Events</h3>
        <ul>
          <li>Group room blocks, weddings, conferences, MICE, banquets and event packages are governed by the signed quotation, contract, letter of intent, advance schedule or group booking agreement.</li>
          <li>Individual-room cancellation rules do not apply unless specifically incorporated into the group contract.</li>
          <li>Advances paid against committed inventory, food arrangements, event spaces, decor, vendors or special arrangements may be non-refundable depending on the contract and stage of cancellation.</li>
          <li>The Company may adjust cancellation charges against deposits or advances already received.</li>
        </ul>

        <h3>9. No-Show, Late Arrival & Early Departure</h3>
        <ul>
          <li>If a guest does not arrive on the confirmed check-in date and no written late-arrival approval has been issued, the reservation may be treated as a no-show and the full booking value may be retained.</li>
          <li>The hotel may release the room after the applicable hold period without liability to reinstate the booking.</li>
          <li>Early departure, shortening of stay after check-in or voluntary non-use of confirmed room nights will ordinarily attract charges for the full confirmed stay and will not create a refund entitlement.</li>
        </ul>

        <h3>10. Refund Processing</h3>
        <ul>
          <li>Only refunds expressly approved in writing by an authorised representative of AM Hotels & Resorts will be processed.</li>
          <li>Approved direct-booking refunds will ordinarily be initiated to the original payment source within 7 to 15 business days after approval and receipt of complete payment details, subject to banking and gateway timelines.</li>
          <li>Actual credit can take longer depending on the bank, card issuer, UPI provider, payment gateway or OTA. Such third-party processing time is outside the Company’s control.</li>
          <li>Any legally permissible, non-recoverable payment gateway, banking or third-party processing cost may be deducted from the refundable amount.</li>
          <li>Cash refunds against electronic payments will not ordinarily be made.</li>
        </ul>

        <h3>11. Force Majeure & Circumstances Beyond Control</h3>
        <p>Where travel or hotel operations are affected by events beyond reasonable control, including severe weather, flooding, natural disasters, government restrictions, strikes, transport disruption, public emergencies, civil disturbance, epidemics or similar events, the Company will review the booking in light of the applicable rate plan, operational conditions and law.</p>
        <ul>
          <li>Where legally permissible, AM Hotels & Resorts may offer a credit voucher or alternate dates instead of a cash refund.</li>
          <li>Any voucher may carry a validity period, blackout dates, availability restrictions and tariff-difference conditions.</li>
          <li>Personal illness, missed flights/trains, vehicle breakdown, change of plan or individual travel inconvenience does not automatically override a non-refundable rate condition.</li>
        </ul>

        <h3>12. Cancellation or Modification by the Hotel</h3>
        <p>In the exceptional event that AM Hotels & Resorts is unable to honour a confirmed reservation for reasons attributable to the hotel, the Company may, depending on the circumstances, offer an alternative room/category/property, alternate dates, a credit, or refund the amount actually received for the affected reservation.</p>
        <p>To the maximum extent permitted by law, the Company will not be responsible for indirect, consequential or third-party losses such as travel costs, missed transport, loss of business, third-party booking fees or incidental expenses, except where liability cannot lawfully be excluded.</p>

        <h3>13. Chargebacks & Payment Disputes</h3>
        <ul>
          <li>Guests are requested to contact AM Hotels & Resorts or the relevant booking channel before initiating a payment dispute or chargeback.</li>
          <li>Where a chargeback is raised, the Company may submit the booking confirmation, cancellation terms, payment records, communications, check-in records and other relevant evidence to the bank, gateway or payment provider.</li>
          <li>A chargeback does not itself cancel a reservation or establish a refund entitlement.</li>
        </ul>

        <h3>14. How to Request a Direct Booking Cancellation</h3>
        <p>A direct cancellation request should include the guest name, booking/confirmation number, hotel or resort name, check-in and check-out dates, registered mobile number/email and the reason for the request where relevant.</p>
        <p>A request is treated as accepted only when written cancellation confirmation is issued by AM Hotels & Resorts. An unanswered call, WhatsApp message, email delivery receipt or verbal discussion does not by itself constitute cancellation approval.</p>

        <h3>15. Management Discretion & No Waiver</h3>
        <p>Any relaxation, waiver, date change, credit note or refund granted by AM Hotels & Resorts is case-specific and discretionary unless required by law. Granting an exception on one occasion does not oblige the Company to grant the same or a similar exception for another reservation.</p>
        <p>Failure by the Company to enforce any provision immediately shall not be treated as a permanent waiver of that provision.</p>

        <h3>16. Applicable Law & Consumer Rights</h3>
        <p>Nothing in this policy is intended to exclude or restrict any right that cannot lawfully be excluded under applicable Indian law. Where a mandatory legal requirement conflicts with a contractual term, the mandatory legal requirement will prevail to the extent of the conflict.</p>

        <h3>17. Policy Updates</h3>
        <p>Ante Meridiem Hospitality Pvt. Ltd. may revise this policy from time to time. The version displayed on www.amhotels.in will apply to new reservations made after publication. Existing reservations remain governed by the terms confirmed when they were booked, unless otherwise agreed in writing or required by law.</p>

        <h3>18. Contact</h3>
        <p>Ante Meridiem Hospitality Pvt. Ltd.<br />AM Hotels & Resorts<br />Website: www.amhotels.in</p>
      </div>
    `,
  },
];
