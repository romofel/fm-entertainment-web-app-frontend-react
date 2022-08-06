import trending from '../../assets/thumbnails/1998/trending/large.jpg';

export default function Thumbnail() {
  return <div>
    <img data-testid="thumbnail-background" src={trending} alt="" />
  </div>;
}