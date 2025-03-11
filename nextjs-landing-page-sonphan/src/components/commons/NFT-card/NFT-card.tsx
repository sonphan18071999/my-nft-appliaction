"use client";
import { NFTBackgroundConfig } from "@/models/configs/NFTBackgroundConfig.model";
import styles from "@/styles/market-place.module.scss";
import React from "react";
import { Button, Image, Tag, Tooltip, Typography } from "antd";
import { HeartFilled, SmileOutlined } from "@ant-design/icons";
import Author from "@/components/commons/author/author";
import { IProduct } from "@/models/product.model";
import clsx from "clsx";
import CardAddToCart from "@/components/commons/card-add-to-cart/card-add-to-cart";
import { useSearchStore } from "@/hooks/useSearchStore";
import { showNotification } from "@/utils/notificationService";

interface NFTCardProps {
  product: IProduct;
}

const NFTCard: React.FC<NFTCardProps> = ({ product }) => {
  const { addItemIntoCart } = useSearchStore();
  const NFTcards: NFTBackgroundConfig[] = [
    { type: "Epic", src: "/assets/images/epic-card-bg.svg" },
    { type: "Mythic", src: "/assets/images/mythic-card-bg.svg" },
    { type: "Common", src: "/assets/images/common-card-bg.svg" },
    { type: "Legendary", src: "/assets/images/legendary-card-bg.svg" },
  ];

  const mapBackgroundType = () => {
    const itemFound = NFTcards.find((item) => item.type === product.category);

    if (!itemFound) {
      return { backgroundColor: "white" };
    }

    return { backgroundImage: `url(${itemFound.src})` };
  };

  const mapBackgroundAvatar = (): {
    backgroundImage: string;
    position: "absolute" | "relative" | "fixed" | "sticky" | "static";
    top: string;
    width: string;
    height: string;
    backgroundPosition: string;
    backgroundSize: string;
    backgroundRepeat: string;
  } => {
    const productImage = { backgroundImage: "" };

    switch (product.category) {
      case "Epic":
        productImage.backgroundImage = `url('/assets/images/the-dj-small.svg')`;
        break;
      case "Mythic":
        productImage.backgroundImage = `url('/assets/images/basket-ball.svg')`;
        break;
      case "Rare":
        productImage.backgroundImage = `url('/assets/images/neon-guy.svg')`;
        break;
      case "Legendary":
        productImage.backgroundImage = `url('/assets/images/mafia-england.svg')`;
        break;
      default:
        productImage.backgroundImage = `url('/assets/images/mafia-england.svg')`;
        break;
    }

    return {
      ...productImage,
      position: "absolute",
      top: "0",
      width: "100%",
      height: "100%",
      backgroundPosition: "center bottom",
      backgroundSize: "contain",
      backgroundRepeat: "no-repeat",
    };
  };
  const handleAddItemIntoCart = (id: string) => {
    addItemIntoCart(id);
    showNotification({
      type: "success",
      message: "Success!",
      description: "Your action was successful!",
      icon: <SmileOutlined style={{ color: "#108ee9" }} />,
    });
  };

  return (
    <div className={`nft-card w-2 h-2 ${styles.NFT__card}`}>
      <div className={styles.NFT__picture} style={mapBackgroundType()}>
        <div className={styles.picture__header}>
          <Tag className={styles.header__primary_button}>
            {product.category}
          </Tag>
          <Button
            className={`${styles.header__heart_button} ${product.isFavorite ? styles.header__heart_button_active : ""}`}
          >
            <HeartFilled />
          </Button>
        </div>
        <div style={mapBackgroundAvatar()} className={styles.character}></div>
      </div>
      <div className={styles.NFT__details}>
        <div className={styles.details__header}>
          <Typography className={"text-white"}>
            <b>{product.title}</b>
          </Typography>
          <div className={styles.details__price}>
            <Image
              src={"/assets/images/logos_ethereum.svg"}
              width="20"
              height="20"
            />
            <Tooltip title={`${product.price} ETH`} arrow>
              <Typography className="text-white text-[0.8rem] truncate max-w-[100px] overflow-hidden">
                {product.price} ETH
              </Typography>
            </Tooltip>
          </div>
        </div>
        <div className={styles.author}>
          <Author
            image={product.author.avatar}
            name={`${product.author.firstName} ${product.author.lastName}`}
            type={product.author.onlineStatus}
          />
        </div>
      </div>
      <CardAddToCart
        productId={product.id}
        className={clsx(styles.add_to_cart)}
        onAddItemIntoCart={handleAddItemIntoCart}
      />
    </div>
  );
};

export default NFTCard;
