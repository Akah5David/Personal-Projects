import SubscribeButton from "../Reusable-Components/SubscribeButton";

export default function SubscribePage() {
  return (
    <main>
      <section className="">
        <div>
          <div>
            <h5 className="">Unlimited animals documentaries</h5>
            <h2>Get Streaming X subscription today</h2>
          </div>
          <div>
            <div>
              <svg></svg>
              <div>
                <h3>More than 1,500+ documentaries</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit tortor
                  eu egestas morbi sem vulputate etiam facilis.
                </p>
              </div>
            </div>

            <div>
              <svg></svg>
              <div>
                <h3>Recorded in 4K</h3>
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur excepteur
                </p>
              </div>
            </div>

            <div>
              <svg></svg>
              <div>
                <h3>Available in all your devices</h3>
                <p>
                  Massa tincidunt dui ut ornare lectus sit. Imperdiet massa
                  tincidunt nunc pulvinar sapien et ligula ullamcorper.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div>
            <div>
              <h2>$9.99</h2>
              <h3>one-time payment</h3>
              <p>Available in all your devices</p>
            </div>
            <div>
              <div>
                <svg></svg>
                <p>Unlimited Access</p>
              </div>

              <div>
                <svg></svg>
                <p>Available in All Platform</p>
              </div>

              <div>
                <svg></svg>
                <p>Exclusive Content</p>
              </div>

              <div>
                <svg></svg>
                <p>Downloadable Content</p>
              </div>

              <div>
                <svg></svg>
                <p>Content Every Week</p>
              </div>

              <div>
                <svg></svg>
                <p>Best Audio Quality</p>
              </div>
            </div>
            <SubscribeButton />
          </div>
        </div>
      </section>
    </main>
  );
}
