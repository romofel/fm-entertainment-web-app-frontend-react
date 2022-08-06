import trending from '../../assets/thumbnails/1998/trending/large.jpg';

export default function Thumbnail({ background = 'https://placehold.co/600x400' }) {
  return <div>
    {background && <img data-testid="thumbnail-background" src={background} alt="" />
    }
  </div>;
}