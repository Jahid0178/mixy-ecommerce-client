import React from "react";
import Image from "next/image";
import styles from "./SmallBanner.module.css";

const SmallBanner = ({ contents }) => {
  return (
    <div>
      <div className={styles.topBannerContainer}>
        {contents.map((content) => (
          <div key={content.name} className={styles.topBannerContent}>
            <Image src={content.image} alt="Banner One" />
            <div className={styles.topBannerText}>
              <p>{content.name}</p>
              <h2>{content.title}</h2>
              <h3>{content.discount}</h3>
              {content.price ? (
                <p className={styles.price}>${content?.price}</p>
              ) : (
                ""
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SmallBanner;
