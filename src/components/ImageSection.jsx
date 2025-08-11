import './ImageSection.css';

export default function ImageSection({ image, title }) {
    return (
        <div class="image-container">
            <div class="gradient-bg"></div>
            <img src={image} alt={title} class="pear-image" />
        </div>
    )
}