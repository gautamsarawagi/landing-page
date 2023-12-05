import { FunctionComponent } from "react";
import styles from "./LandingWhales.module.css";

const LandingWhales: FunctionComponent = () => {
  return (

    <div className={styles.container}>
    <div className={styles.landingWhales}>
      <div className={styles.bluela2} />
      <div className={styles.frameParent}>
        <div className={styles.yashPParent}>
          <div className={styles.yashP}>Yash P</div>
          <div className={styles.research3pochCrypto}>
            Research, 3poch Crypto Hedge Fund
          </div>
        </div>
        <div className={styles.assetsSumWrapper}>
          <div className={styles.assetsSum}>
            “I use Loch everyday now. I don't think I could analyze crypto whale
            trends markets without it. I'm addicted!”
          </div>
        </div>
      </div>
      <div className={styles.frameGroup}>
        <div className={styles.yashPParent}>
          <div className={styles.yashP}>Jack F</div>
          <div className={styles.research3pochCrypto}>Ex Blackrock PM</div>
        </div>
        <div className={styles.assetsSumWrapper}>
          <div className={styles.assetsSum}>
            “Love how Loch integrates portfolio analytics and whale watching
            into one unified app.”
          </div>
        </div>
      </div>
      <div className={styles.headerBg} />
      <img className={styles.vectorIcon} alt="" src="/Vector.png" />
      <div className={styles.blank1Parent}>
        <div className={styles.blank1}>
          <div className={styles.address}>Your email address</div>
        </div>
        <div className={styles.addWrapper}>
          <div className={styles.add}>
            <div className={styles.yashP}>
              You’ll receive an email with an invite link to join.
            </div>
          </div>
        </div>
        <div className={styles.addContainer}>
          <div className={styles.add1}>
            <div className={styles.yashP}>Get started</div>
          </div>
        </div>
        <div className={styles.groupWrapper}>
          <div className={styles.secondaryLabelWrapper}>
            <div className={styles.secondaryLabel}>
              <p className={styles.signUpFor}>{`Sign up for `}</p>
              <p className={styles.signUpFor}>exclusive access.</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.secondaryLabelParent}>
        <div className={styles.secondaryLabel1}>
          Get notified when a highly correlated whale makes a move
        </div>
        <div className={styles.secondaryLabel2}>
          Find out when a certain whale moves more than any preset amount
          on-chain or when a dormant whale you care about becomes active.
        </div>
        <img className={styles.bellIcon} alt="" src="/Bell.png" />
      </div>
      <div className={styles.secondaryLabel3}>Testimonials</div>
      <div className={styles.landingWhalesChild} />
      <div className={styles.maskGroup}>
        <div className={styles.whaleCards}>
          <div className={styles.frameContainer}>
            <div className={styles.checkmarkParent}>
              <div className={styles.checkmark}>
                <img className={styles.icon} alt="" src="/icon.svg" />
              </div>
              <div className={styles.captionParent}>
                <div className={styles.address}>$1,000.00</div>
                <img
                  className={styles.triangleDownIcon}
                  alt=""
                  src="/triangle-down.png"
                />
              </div>
              <img
                className={styles.barChart2Icon}
                alt=""
                src="/barchart2.svg"
              />
            </div>
            <div className={styles.captionWrapper}>
              <div className={styles.secondaryLabel}>
                <p className={styles.signUpFor}>Notify me when any wallets</p>
                <p className={styles.signUpFor}>move more than</p>
              </div>
            </div>
          </div>
          <div className={styles.groupDiv}>
            <div className={styles.checkmarkParent}>
              <div className={styles.checkmark}>
                <img className={styles.icon} alt="" src="/icon1.svg" />
              </div>
              <img className={styles.barChart2Icon} alt="" src="/clock.svg" />
            </div>
            <div className={styles.frameParent1}>
              <div className={styles.captionGroup}>
                <div className={styles.address}>{`> 30 days`}</div>
                <img
                  className={styles.triangleDownIcon}
                  alt=""
                  src="/triangledown1.svg"
                />
              </div>
              <div className={styles.captionContainer}>
                <div className={styles.caption3}>
                  Notify me when any wallet dormant for
                </div>
              </div>
              <div className={styles.captionFrame}>
                <div className={styles.caption4}>becomes active</div>
              </div>
            </div>
          </div>
          <div className={styles.wellBeSendingNotificationsParent}>
            <div className={styles.wellBeSendingContainer}>
              <p className={styles.signUpFor}>We’ll be sending</p>
              <p className={styles.signUpFor}>notifications to you</p>
              <p className={styles.signUpFor}>here</p>
            </div>
            <img className={styles.barChart2Icon} alt="" src="/bell1.png" />
            <div className={styles.firstname}>
              <div className={styles.address}>hello@gmail.com</div>
            </div>
            <div className={styles.smalButton} />
            <div className={styles.secondaryLabel4}>Save</div>
          </div>
        </div>
      </div>
      <div className={styles.eyeParent}>
        <img className={styles.eyeIcon} alt="" src="/eye.svg" />
        <div className={styles.secondaryLabelGroup}>
          <div className={styles.secondaryLabel5}>
            Watch what the whales are doing
          </div>
          <div className={styles.secondaryLabel6}>
            All whales are not equal. Know exactly what the whales impacting
            YOUR portfolio are doing.
          </div>
        </div>
        <img className={styles.cohorts1Icon} alt="" src="/cohorts-1@2x.png" />
      </div>
    </div>
    </div>

  );
};

export default LandingWhales;
