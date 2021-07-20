import React from "react";
import CoverNotFound from "../../assets/imgs/cover-not-found.png";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import { useStyles } from "./styles";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  Typography,
} from "@material-ui/core";
import { CardContainer } from "./styles";

type bookCardProps = {
  bookCover: string;
  title: string;
  description: string;
  publishedDate: string;
  infoLink: string;
  handleFavorite(): void;
  isFavorite: boolean;
};

export const BookCard: React.FC<bookCardProps> = ({
  bookCover,
  title,
  description,
  publishedDate,
  infoLink,
  handleFavorite,
  isFavorite = false,
}) => {
  let classes = useStyles();
  return (
    <CardContainer>
      <Card className={classes.card}>
        <div className={classes.root}>
          <div className={classes.details}>
            <CardContent>
              <CardHeader
                title={
                  title && (
                    <h6>
                      {`${title.substring(0, 35)} ${
                        title.length > 35 ? "..." : ""
                      }`}
                    </h6>
                  )
                }
              />
              <CardContent>
                <Typography
                  variant="caption"
                  color="textSecondary"
                  component="p"
                >
                  {"Publicado em: "}
                  {publishedDate}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {description && (
                    <p>
                      Descriçaõ:{" "}
                      {`${description.substring(0, 160)} ${
                        description.length > 160 ? "..." : ""
                      }`}
                    </p>
                  )}
                </Typography>
              </CardContent>
            </CardContent>
          </div>
          <div>
            <IconButton
              className={classes.favorit}
              aria-label="add to favorites"
              onClick={handleFavorite}
            >
              {isFavorite ? (
                <FavoriteIcon color="secondary" />
              ) : (
                <FavoriteBorderIcon />
              )}
            </IconButton>
            <CardMedia
              className={classes.cover}
              image={bookCover ? bookCover : CoverNotFound}
              title={title}
            />
          </div>
        </div>
        <CardActions disableSpacing>
          <IconButton
            className={classes.expand}
            onClick={() => {
              window.open(infoLink, "_blank");
            }}
          >
            VER MAIS <ArrowForwardIcon />
          </IconButton>
        </CardActions>
      </Card>
    </CardContainer>
  );
};
