import Image from 'next/image'
import Nav from './components/Nav'
import Countdown from './components/Countdown'
import ContactForm from './components/ContactForm'
import Reveal from './components/Reveal'

export default function Home() {
  return (
    <>
      {/* 1. NAV */}
      <Nav />

      {/* 2. HERO */}
      <Reveal className="hero">
        <div className="heroLabel">OFF MARKET · WESTLAKE · LOS ANGELES CA 90057</div>
        <h1 className="heroH1">
          The zoning framework is already there.<br />
          <span className="accent">Someone just needs to build it.</span>
        </h1>
        <div className="heroSubline">LAR4-1 · TOC TIER 3 · EST. ~33 BUILDABLE UNITS* · MACARTHUR PARK METRO</div>

        <Countdown />

        <div className="baPhotos">
          <div className="baPhoto cropBottom">
            <Image src="/existing-building.png" alt="The existing building at 446 S Bonnie Brae Street as it stands today" width={600} height={260} style={{ width: '100%', height: '260px', objectFit: 'cover', objectPosition: 'center 5%' }} />
            <div className="baOverlay" />
            <div className={`baLabel baLabelNavy`}>EXISTING BUILDING — TODAY</div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div className="baPhoto">
              <Image src="/proposed-render.jpg" alt="Illustrative rendering of a proposed multifamily development concept on the site" width={600} height={260} style={{ width: '100%', height: '260px', objectFit: 'cover' }} />
              <div className={`baLabel baLabelGold`}>PROPOSED DEVELOPMENT CONCEPT — ILLUSTRATIVE ONLY*</div>
            </div>
            <div className="aiDisclosure">AI-generated image for illustrative purposes</div>
          </div>
        </div>
      </Reveal>

      {/* 3. GOLD FACTS STRIP */}
      <Reveal>
        <div className="facts">
          <div className="factsInner">
            {[
              ['7,870 SF', 'Lot Area'],
              ['LAR4-1', 'Zoning'],
              ['TOC Tier 3', 'Designation'],
              ['~33 Units*', 'Est. Buildable'],
              ['Metro', 'Steps Away'],
            ].map(([val, lbl]) => (
              <div className="fact" key={lbl}>
                <div className="factVal">{val}</div>
                <div className="factLbl">{lbl}</div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      {/* 4. AS-IS & TENANCY */}
      <Reveal className="block bgWhite">
        <div className="wrapNarrow">
          <span className="secTag">Property Condition &amp; Tenancy</span>
          <div className="callout">
            <h3>Sold As-Is. No Repairs. Tenants in Place.</h3>
            <p>Property will be sold in its current as-is condition. Seller will make no repairs or improvements. The owner-occupied unit (Unit 4) will be delivered vacant at close of escrow. Three RSO tenants will transfer with the property — the future owner inherits the existing tenancies. Full tenant disclosure including confirmed move-in dates and estimated relocation costs is provided in the Offering Memorandum.</p>
          </div>
        </div>
      </Reveal>

      {/* 5. WHY THIS SITE IS DIFFERENT */}
      <Reveal className="block bgCream">
        <div className="wrapNarrow">
          <span className="secTag">Why This Site Is Different</span>
          <h2 className="secH">Three developer headaches — addressed before you write a check.</h2>
          <div className="arrowList">
            {[
              { title: 'The Density Problem', badge: 'Addressed', badgeCls: 'badgeGreen', body: 'TOC Tier 3 density framework already written into the zoning code. Est. 70% density bonus over base zoning. No city approval fight required — the framework is already there.' },
              { title: 'The Parking Problem', badge: 'Addressed', badgeCls: 'badgeGreen', body: 'Per AB 2097, minimum parking requirements may be fully eliminated for qualifying affordable developments at this Metro-adjacent location — potentially saving $650,000–$1,000,000 in construction costs.' },
              { title: 'The RSO Picture', badge: 'Fully Disclosed', badgeCls: 'badgeGold', body: 'Three RSO tenants transfer with the property. Owner unit delivered vacant. Move-in dates confirmed. No hidden exposure.' },
            ].map(({ title, badge, badgeCls, body }) => (
              <div className="arrowItem" key={title}>
                <div className="arrowMark">→</div>
                <div className="arrowBody">
                  <div className="titleRow">
                    <span className="itemTitle">{title}</span>
                    <span className={`badge ${badgeCls}`}>{badge}</span>
                  </div>
                  <p>{body}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="disclaimer">*Subject to City of LA review, architectural confirmation, and independent verification per AB 2097 and TOC Tier 3 guidelines.</p>
        </div>
      </Reveal>

      {/* 6. SIX REASONS */}
      <Reveal className="block bgWhite">
        <div className="wrap">
          <span className="secTag">The Opportunity</span>
          <h2 className="secH">Six reasons this deal works.</h2>
          <div className="grid6">
            {[
              { stat: 'TOC T3', title: 'Highest Density Designation', body: 'Est. 70% density bonus over base zoning — one of the highest incentive tiers in the City of LA. Triggered by MacArthur Park Metro proximity.' },
              { stat: '~33', title: 'Estimated Buildable Units', body: 'LAR4-1 zoning with est. FAR 4.5:1 — 50% above standard. Clean rectangular lot approx. 60 ft wide × 130 ft deep.' },
              { stat: '$0', title: 'Subterranean Parking Required', body: 'Per AB 2097, parking may be fully waived for qualifying affordable developments at this transit location — more buildable area, lower costs.' },
              { stat: 'Metro', title: 'MacArthur Park — Steps Away', body: 'Red and Purple Lines. Walking distance. Direct access to Downtown LA, Koreatown, Hollywood. This is what triggers TOC Tier 3.' },
              { stat: 'RSO', title: 'Fully Disclosed — No Surprises', body: 'Three RSO tenants disclosed with confirmed move-in dates. Relocation est. ~$150K including legal — priced in. Owner unit delivered vacant.' },
              { stat: 'LOD', title: 'Proof Across the Street', body: 'City of LA issued Letter of Determination DIR-2016-4972-DB supporting a 26-unit project at 451 S Bonnie Brae — directly across the street. Same zoning. Same TOC tier.' },
            ].map(({ stat, title, body }) => (
              <div className="card" key={stat + title}>
                <div className="cardStat">{stat}</div>
                <div className="cardTitle">{title}</div>
                <div className="cardBody">{body}</div>
              </div>
            ))}
          </div>
          <div className="callout" style={{ marginTop: '32px' }}>
            <p>LAR4-1. TOC Tier 3. Est. ~33 buildable units. Steps from MacArthur Park Metro. Per AB 2097, minimum parking requirements may be fully eliminated for qualifying affordable developments at this location — meaning more buildable area, lower construction costs, better returns. Subject to City of LA review and your architect&apos;s confirmation. You are seeing this before it goes to market.</p>
          </div>
        </div>
      </Reveal>

      {/* 7. ALREADY HAPPENING ON THIS BLOCK */}
      <Reveal className="block bgCream">
        <div className="wrapNarrow">
          <span className="secTag">Already Happening On This Block</span>
          <h2 className="secH">The submarket is moving. This block is the proof.</h2>
          <div className="dotList">
            {[
              { title: '452 S Bonnie Brae — Next Door', badge: 'Permits Active', badgeCls: 'badgeGreen', body: 'Permits just reactivated. Ready for development. Adjacent lot on the same street.' },
              { title: '451 S Bonnie Brae — Across the Street', badge: 'City LOD Issued', badgeCls: 'badgeBlue', body: 'City of Los Angeles issued Letter of Determination for a 26-unit development. Same LAR4-1 zoning. Same TOC Tier 3. Proof of concept on this exact block.' },
              { title: '329 S Bonnie Brae — Same Street', badge: 'Final Phase', badgeCls: 'badgeAmber', body: '30-unit project now in final construction phase. Actively under development right now on this street.' },
              { title: '830 S Bonnie Brae — Same Corridor', badge: 'Same Corridor', badgeCls: 'badgeGray', body: '20-unit complex a few blocks away — confirms sustained investor and developer demand in this submarket.' },
            ].map(({ title, badge, badgeCls, body }) => (
              <div className="dotItem" key={title}>
                <div className="dot" />
                <div className="dotBody">
                  <div className="titleRow">
                    <span className="itemTitle">{title}</span>
                    <span className={`badge ${badgeCls}`}>{badge}</span>
                  </div>
                  <p>{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      {/* 8. MASSING DIAGRAM */}
      <Reveal className="block bgWhite">
        <div className="wrap">
          <span className="secTag">Massing Diagram</span>
          <h2 className="secH">What could be built here.</h2>
          <Image src="/massing-diagram.png" alt="Illustrative massing diagram showing the estimated buildable envelope on the site" width={1080} height={540} className="massingImg" style={{ width: '100%', height: 'auto' }} />
          <div className="aiDisclosure" style={{ textAlign: 'center', marginTop: '8px' }}>AI-generated image for illustrative purposes</div>
          <div className="statRow">
            <div className="statBox"><div className="statNum">~33</div><div className="statLbl">Est. Total Units* — 25 market rate + 4 SB 8 affordable + 4 owner replacement</div></div>
            <div className="statBox"><div className="statNum">5</div><div className="statLbl">Stories* — Wood frame over podium, Type III-A over Type I-A</div></div>
            <div className="statBox"><div className="statNum">0</div><div className="statLbl">Subterranean Levels* — At-grade parking only per TOC Tier 3</div></div>
          </div>
          <p className="disclaimer" style={{ textAlign: 'center', marginLeft: 'auto', marginRight: 'auto' }}>*All figures are estimates for illustrative purposes only. Subject to City of LA formal review and approval.</p>
        </div>
      </Reveal>

      {/* 9. FINANCING */}
      <Reveal className="block bgCream">
        <div className="wrap">
          <span className="secTag">Financing Available</span>
          <h2 className="secH">Financing solutions available — your choice of lender.</h2>
          <p className="introP">The listing agent is also a licensed mortgage loan originator through Loan Factory. Three lenders have already reviewed this asset and expressed interest in financing. This is offered as a convenience only — using Loan Factory for financing is entirely optional and has no bearing on the real estate transaction. Buyers are free and encouraged to use any lender of their choice.</p>
          <div className="grid3">
            <div className="card">
              <div className="cardTitle" style={{ fontSize: '1rem', marginBottom: '10px' }}>Acquisition Bridge</div>
              <div className="cardBody">Short-term bridge financing for land acquisition. Quick-close capability. Competitive terms for qualified developers.</div>
              <span className="pill pillNavy">Lenders Ready</span>
            </div>
            <div className="card">
              <div className="cardTitle" style={{ fontSize: '1rem', marginBottom: '10px' }}>Construction to Permanent</div>
              <div className="cardBody">Ground-up multifamily financing. TOC and RSO-experienced lenders. Draw structure and interest reserve available.</div>
              <span className="pill pillNavy">Lenders Ready</span>
            </div>
            <div className="card">
              <div className="cardTitle" style={{ fontSize: '1rem', marginBottom: '10px' }}>Use Your Own Lender</div>
              <div className="cardBody">Entirely optional. Buyers are free and encouraged to bring their own lender relationships. No obligation, no pressure, no strings attached.</div>
              <span className="pill pillGray">Always An Option</span>
            </div>
          </div>
          <div className="finBanner">
            <div className="finBannerText">
              <h3>Three lenders have already reviewed this asset</h3>
              <p>Through Loan Factory&apos;s network, three lenders expressed interest before this went to market. When a buyer is identified, financing conversations begin the same day — no cold outreach, no delays. Full lender details available upon confirmed interest.</p>
            </div>
            <div className="finBannerStat">
              <div className="finBannerNum">200+</div>
              <div className="finBannerLbl">Direct Lenders Nationwide</div>
            </div>
          </div>
          <p className="disclaimer">Mortgage origination services through Loan Factory NMLS #320841 · Edit Benyi NMLS #1762484. Optional — buyers free to use any lender. AfBA disclosure provided upon request.</p>
        </div>
      </Reveal>

      {/* 10. SCARCITY CLOSE */}
      <Reveal className="block bgNavy">
        <div className="wrapNarrow scarcity">
          <div className="scarcityLbl">Exclusive Access Window</div>
          <h2 className="scarcityH2">
            Once this goes to market —<br />
            <span className="accent">this conversation changes.</span>
          </h2>
          <p className="scarcityBody">Right now you are seeing this before the broader market does. Once the exclusivity window closes, this becomes a competitive process. The developers who move first set the terms. The ones who wait respond to them.</p>
          <Countdown />
          <a href="#contact" className="ctaGold">Contact for Details →</a>
          <p className="ctaNote">No price shown publicly. Full financials available to qualified developers and investors upon request.</p>
        </div>
      </Reveal>

      {/* 11. CONTACT FORM */}
      <Reveal className="block bgWhite" id="contact">
        <div className="wrapNarrow">
          <span className="secTag">Contact</span>
          <h2 className="secH">Tell us about yourself.</h2>
          <p className="introP">We share full financials and deal details with qualified developers and investors. Fill out the short form below and we will send the Offering Memorandum directly to your inbox.</p>
          <ContactForm />
          <div className="agentCard">
            <div className="agentAvatar">
              <Image src="/agent-photo.jpg" alt="Edit Benyi" width={64} height={64} style={{ width: '64px', height: '64px', objectFit: 'cover', borderRadius: '50%' }} />
            </div>
            <div className="agentMid">
              <div className="agentName">Edit Benyi</div>
              <div className="agentRole">Real Estate and Mortgage Broker</div>
              <div className="agentLic">
                Coldwell Banker &nbsp;DRE #01918439 &nbsp;|&nbsp; CO-DRE #02211662<br />
                Loan Factory &nbsp;NMLS #1762484 &nbsp;|&nbsp; CO-NMLS #320841
              </div>
            </div>
            <div className="agentRight">
              <div className="agentPhone">310.967.9156</div>
              <div className="agentFn">Financing optional. Buyers free to use any lender. AfBA disclosure on request.</div>
            </div>
          </div>
        </div>
      </Reveal>

      {/* 12. FOOTER */}
      <footer className="footer">
        <div className="footerTop">
          <span>446 S Bonnie Brae Street · Los Angeles, CA 90057</span>
          <span>© 2026 Edit Benyi · DRE #01918439 · Coldwell Banker</span>
        </div>
        <p className="footerDisc">All development potential figures, unit yields, FAR, density bonuses, and parking reductions are estimates based on current LAR4-1 zoning and TOC Tier 3 guidelines, for illustrative purposes only, and do not constitute a guarantee of any kind. Actual development is subject to City of LA formal review and approval. Laws and guidelines subject to change. Buyer to independently verify with licensed architect, land use attorney, and City of LA. Dual License Disclosure: Edit Benyi DRE #01918439 / Coldwell Banker DRE #02211662. Mortgage: NMLS #1762484 / Loan Factory NMLS #320841. Mortgage services optional. Buyers free to use any lender. AfBA disclosure provided upon request.</p>
      </footer>
    </>
  )
}
