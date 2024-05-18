import { Button, Tooltip } from "@nextui-org/react";

const index = () => {
  return (
    <>
      <div className="grid place-items-center h-dvh">
        <Tooltip
          showArrow={true}
          color="warning"
          content="Hover">
          <Button
            color="warning"
            variant="ghost">
            Click
          </Button>
        </Tooltip>
      </div>
    </>
  );
};

export default index;
