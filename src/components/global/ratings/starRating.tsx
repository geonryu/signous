import styled from "styled-components"
import Star from "./star";

const Ratings = styled.div``;

export default function StarRating() {
    return(
        <Ratings>
            <Star theme="white-stroke"></Star>
            <Star theme="white-stroke"></Star>
            <Star theme="white-stroke"></Star>
            <Star theme="white-stroke"></Star>
            <Star theme="white-stroke"></Star>
        </Ratings>
    )
}